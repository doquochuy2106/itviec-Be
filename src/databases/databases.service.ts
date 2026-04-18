import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import {
  Permission,
  PermissionDocument,
} from 'src/permissions/schemas/permission.schema';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { Company, CompanyDocument } from 'src/companies/schemas/company.schema';
import { Job, JobDocument } from 'src/jobs/schemas/job.schema';
import { Resume, ResumeDocument } from 'src/resumes/schemas/resume.schema';
import {
  Subscriber,
  SubscriberDocument,
} from 'src/subscribers/schemas/subscriber.schema';
import {
  ADMIN_ROLE,
  INIT_PERMISSIONS,
  INIT_COMPANIES,
  INIT_SUBSCRIBERS,
  USER_ROLE,
} from './sample';

@Injectable()
export class DatabasesService implements OnModuleInit {
  private readonly logger = new Logger(DatabasesService.name);

  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,

    @InjectModel(Permission.name)
    private permissionModel: SoftDeleteModel<PermissionDocument>,

    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,

    @InjectModel(Company.name)
    private companyModel: SoftDeleteModel<CompanyDocument>,

    @InjectModel(Job.name)
    private jobModel: SoftDeleteModel<JobDocument>,

    @InjectModel(Resume.name)
    private resumeModel: SoftDeleteModel<ResumeDocument>,

    @InjectModel(Subscriber.name)
    private subscriberModel: SoftDeleteModel<SubscriberDocument>,

    private configService: ConfigService,
    private userService: UsersService,
  ) {}

  async onModuleInit() {
    const isInit = this.configService.get<string>('SHOULD_INIT');
    if (Boolean(isInit)) {
      const countUser = await this.userModel.count({});
      const countPermission = await this.permissionModel.count({});
      const countRole = await this.roleModel.count({});
      const countCompany = await this.companyModel.count({});
      const countJob = await this.jobModel.count({});
      const countSubscriber = await this.subscriberModel.count({});

      // ---- 1. Permissions ----
      if (countPermission === 0) {
        await this.permissionModel.insertMany(INIT_PERMISSIONS);
        this.logger.log('>>> Đã tạo dữ liệu mẫu: Permissions');
      }

      // ---- 2. Roles ----
      if (countRole === 0) {
        const permissions = await this.permissionModel.find({}).select('_id');

        // Các permission dành cho NORMAL_USER (ứng viên)
        const userPermissions = await this.permissionModel
          .find({
            $or: [
              { apiPath: '/api/v1/resumes', method: 'POST' }, // Nộp CV
              { apiPath: '/api/v1/resumes/by-user', method: 'POST' }, // Xem CV của mình
              { apiPath: '/api/v1/resumes/:id', method: 'GET' }, // Xem chi tiết CV
              { apiPath: '/api/v1/jobs', method: 'GET' }, // Xem danh sách job
              { apiPath: '/api/v1/jobs/:id', method: 'GET' }, // Xem chi tiết job
              { apiPath: '/api/v1/companies', method: 'GET' }, // Xem danh sách company
              { apiPath: '/api/v1/companies/:id', method: 'GET' }, // Xem chi tiết company
              { apiPath: '/api/v1/files/upload', method: 'POST' }, // Upload file CV
            ],
          })
          .select('_id');

        await this.roleModel.insertMany([
          {
            name: ADMIN_ROLE,
            description: 'Admin thì full quyền :v',
            isActive: true,
            permissions: permissions,
          },
          {
            name: USER_ROLE,
            description: 'Người dùng/Ứng viên sử dụng hệ thống',
            isActive: true,
            permissions: userPermissions,
          },
        ]);
        this.logger.log('>>> Đã tạo dữ liệu mẫu: Roles');
      }

      // ---- 3. Users ----
      if (countUser === 0) {
        const adminRole = await this.roleModel.findOne({ name: ADMIN_ROLE });
        const userRole = await this.roleModel.findOne({ name: USER_ROLE });
        await this.userModel.insertMany([
          {
            name: "I'm admin",
            email: 'admin@gmail.com',
            password: this.userService.getHashPassword(
              this.configService.get<string>('INIT_PASSWORD'),
            ),
            age: 69,
            gender: 'MALE',
            address: 'VietNam',
            role: adminRole?._id,
          },
          {
            name: "I'm Hỏi Dân IT",
            email: 'hoidanit@gmail.com',
            password: this.userService.getHashPassword(
              this.configService.get<string>('INIT_PASSWORD'),
            ),
            age: 96,
            gender: 'MALE',
            address: 'VietNam',
            role: adminRole?._id,
          },
          {
            name: "I'm normal user",
            email: 'user@gmail.com',
            password: this.userService.getHashPassword(
              this.configService.get<string>('INIT_PASSWORD'),
            ),
            age: 69,
            gender: 'MALE',
            address: 'VietNam',
            role: userRole?._id,
          },
        ]);
        this.logger.log('>>> Đã tạo dữ liệu mẫu: Users');
      }

      // ---- 4. Companies ----
      if (countCompany === 0) {
        await this.companyModel.insertMany(INIT_COMPANIES);
        this.logger.log('>>> Da tao du lieu mau: Companies');
      }

      // ---- 5. Jobs ----
      if (countJob === 0) {
        const [google, shopee, tiki, netflix, lazada, tiktok, aws, adobe] =
          await Promise.all([
            this.companyModel.findOne({ name: 'Google Vietnam' }),
            this.companyModel.findOne({ name: 'Shopee Vietnam' }),
            this.companyModel.findOne({ name: 'Tiki Corporation' }),
            this.companyModel.findOne({ name: 'Netflix Vietnam' }),
            this.companyModel.findOne({ name: 'Lazada Vietnam' }),
            this.companyModel.findOne({ name: 'TikTok Vietnam' }),
            this.companyModel.findOne({ name: 'Amazon Web Services Vietnam' }),
            this.companyModel.findOne({ name: 'Adobe Vietnam' }),
          ]);

        if (
          !google ||
          !shopee ||
          !tiki ||
          !netflix ||
          !lazada ||
          !tiktok ||
          !aws ||
          !adobe
        ) {
          this.logger.error(
            '>>> Khong tim thay du companies de seed Jobs. Hay xoa sach DB va thu lai.',
          );
          return;
        }

        await this.jobModel.insertMany([
          // --- Google ---
          {
            name: 'Senior Fullstack Developer (ReactJS & NestJS)',
            skills: ['ReactJS', 'NestJS', 'TypeScript', 'MongoDB', 'Docker'],
            company: { _id: google._id, name: google.name, logo: google.logo },
            location: 'TP.HCM',
            salary: 3000,
            quantity: 5,
            level: 'SENIOR',
            description: `<p>Chúng tôi đang tìm kiếm <b>Senior Fullstack Developer</b> có kinh nghiệm phát triển ứng dụng web hiện đại.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>Tối thiểu 3 năm kinh nghiệm với ReactJS</li>
                        <li>Kinh nghiệm với NestJS hoặc Express.js</li>
                        <li>Thành thạo TypeScript và MongoDB</li>
                        <li>Hiểu biết về Docker và CI/CD</li></ul>
                        <h3>Quyền lợi:</h3><ul>
                        <li>Lương cạnh tranh từ $2000 - $3000</li>
                        <li>Thưởng hiệu suất hàng quý</li>
                        <li>Môi trường làm việc quốc tế</li></ul>`,
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-12-31'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'Backend Engineer - Go / Kubernetes',
            skills: ['Golang', 'Kubernetes', 'gRPC', 'PostgreSQL', 'Redis'],
            company: { _id: google._id, name: google.name, logo: google.logo },
            location: 'Hà Nội',
            salary: 4000,
            quantity: 3,
            level: 'SENIOR',
            description: `<p>Tham gia nhóm kỹ thuật cốt lõi phát triển hệ thống phân tán quy mô lớn tại Google Việt Nam.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>Tối thiểu 4 năm kinh nghiệm với Golang</li>
                        <li>Kinh nghiệm triển khai hệ thống trên Kubernetes</li>
                        <li>Hiểu biết sâu về gRPC, message queue</li>
                        <li>Kỹ năng xử lý dữ liệu lớn</li></ul>`,
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-11-30'),
            isActive: true,
            isDeleted: false,
          },
          // --- Shopee ---
          {
            name: 'Frontend Developer (ReactJS)',
            skills: ['ReactJS', 'Redux', 'JavaScript', 'CSS', 'Webpack'],
            company: { _id: shopee._id, name: shopee.name, logo: shopee.logo },
            location: 'TP.HCM',
            salary: 1800,
            quantity: 8,
            level: 'MIDDLE',
            description: `<p>Shopee tuyển dụng <b>Frontend Developer</b> để phát triển giao diện người dùng cho nền tảng TMĐT hàng đầu Đông Nam Á.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>2+ năm kinh nghiệm với ReactJS</li>
                        <li>Thành thạo HTML5, CSS3, JavaScript ES6+</li>
                        <li>Kinh nghiệm với Redux hoặc Zustand</li>
                        <li>Hiểu biết về responsive design</li></ul>
                        <h3>Quyền lợi:</h3><ul>
                        <li>Lương từ $1200 - $1800</li>
                        <li>Thưởng lễ, tết đầy đủ</li>
                        <li>Bảo hiểm sức khỏe cao cấp</li></ul>`,
            startDate: new Date('2023-06-15'),
            endDate: new Date('2023-12-15'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'Data Engineer',
            skills: ['Python', 'Apache Spark', 'Kafka', 'AWS', 'SQL'],
            company: { _id: shopee._id, name: shopee.name, logo: shopee.logo },
            location: 'TP.HCM',
            salary: 2500,
            quantity: 4,
            level: 'SENIOR',
            description: `<p>Xây dựng và vận hành hệ thống data pipeline phục vụ phân tích dữ liệu người dùng trên nền tảng Shopee.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>3+ năm kinh nghiệm Data Engineering</li>
                        <li>Thành thạo Python, SQL</li>
                        <li>Kinh nghiệm với Apache Spark, Kafka</li>
                        <li>Hiểu biết về AWS hoặc GCP</li></ul>`,
            startDate: new Date('2023-06-20'),
            endDate: new Date('2024-01-20'),
            isActive: true,
            isDeleted: false,
          },
          // --- Tiki ---
          {
            name: 'Mobile Developer (React Native)',
            skills: ['React Native', 'TypeScript', 'Redux', 'iOS', 'Android'],
            company: { _id: tiki._id, name: tiki.name, logo: tiki.logo },
            location: 'TP.HCM',
            salary: 2000,
            quantity: 6,
            level: 'MIDDLE',
            description: `<p>Tiki tìm kiếm <b>Mobile Developer</b> phát triển ứng dụng di động với hàng triệu người dùng.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>2+ năm kinh nghiệm với React Native</li>
                        <li>Thành thạo TypeScript</li>
                        <li>Kinh nghiệm publish app lên App Store và Google Play</li>
                        <li>Hiểu biết về performance optimization</li></ul>`,
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-12-01'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'Java Backend Developer',
            skills: [
              'Java',
              'Spring Boot',
              'Microservices',
              'MySQL',
              'RabbitMQ',
            ],
            company: { _id: tiki._id, name: tiki.name, logo: tiki.logo },
            location: 'TP.HCM',
            salary: 2200,
            quantity: 5,
            level: 'MIDDLE',
            description: `<p>Phát triển và duy trì các microservices backend phục vụ hệ thống order management của Tiki.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>2+ năm kinh nghiệm Java Spring Boot</li>
                        <li>Kinh nghiệm kiến trúc microservices</li>
                        <li>Thành thạo MySQL, Redis</li>
                        <li>Hiểu biết về message queue (RabbitMQ, Kafka)</li></ul>`,
            startDate: new Date('2023-07-01'),
            endDate: new Date('2024-01-01'),
            isActive: true,
            isDeleted: false,
          },
          // --- Netflix ---
          {
            name: 'DevOps Engineer',
            skills: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes'],
            company: {
              _id: netflix._id,
              name: netflix.name,
              logo: netflix.logo,
            },
            location: 'TP.HCM',
            salary: 3500,
            quantity: 2,
            level: 'SENIOR',
            description: `<p>Xây dựng và vận hành hạ tầng cloud cho Netflix tại thị trường Đông Nam Á.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>4+ năm kinh nghiệm DevOps/Cloud</li>
                        <li>Thành thạo AWS hoặc GCP</li>
                        <li>Kinh nghiệm với Terraform, Ansible</li>
                        <li>Kinh nghiệm Kubernetes ở môi trường production</li></ul>`,
            startDate: new Date('2023-06-15'),
            endDate: new Date('2023-12-15'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'Machine Learning Engineer',
            skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Spark'],
            company: {
              _id: netflix._id,
              name: netflix.name,
              logo: netflix.logo,
            },
            location: 'Hà Nội',
            salary: 4500,
            quantity: 2,
            level: 'SENIOR',
            description: `<p>Phát triển hệ thống recommendation và các mô hình AI/ML cho Netflix.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>4+ năm kinh nghiệm ML/AI</li>
                        <li>Thành thạo Python, TensorFlow hoặc PyTorch</li>
                        <li>Kinh nghiệm với hệ thống recommendation</li>
                        <li>Hiểu biết về MLOps và deployment pipeline</li></ul>`,
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-12-31'),
            isActive: true,
            isDeleted: false,
          },
          // --- Lazada ---
          {
            name: 'Junior Frontend Developer',
            skills: ['VueJS', 'JavaScript', 'HTML', 'CSS', 'Git'],
            company: { _id: lazada._id, name: lazada.name, logo: lazada.logo },
            location: 'TP.HCM',
            salary: 900,
            quantity: 10,
            level: 'JUNIOR',
            description: `<p>Cơ hội tuyệt vời cho các bạn mới ra trường muốn gia nhập đội ngũ frontend tại Lazada.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>Kiến thức nền tảng HTML, CSS, JavaScript</li>
                        <li>Đã học hoặc có kinh nghiệm VueJS/ReactJS</li>
                        <li>Ham học hỏi, chủ động trong công việc</li></ul>
                        <h3>Quyền lợi:</h3><ul>
                        <li>Được mentoring bởi senior developer</li>
                        <li>Lộ trình thăng tiến rõ ràng</li></ul>`,
            startDate: new Date('2023-07-01'),
            endDate: new Date('2024-06-30'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'Product Manager',
            skills: [
              'Product Management',
              'Agile',
              'SQL',
              'Figma',
              'A/B Testing',
            ],
            company: { _id: lazada._id, name: lazada.name, logo: lazada.logo },
            location: 'TP.HCM',
            salary: 3000,
            quantity: 2,
            level: 'SENIOR',
            description: `<p>Dẫn dắt phát triển sản phẩm cho mảng Seller Center của Lazada Việt Nam.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>3+ năm kinh nghiệm Product Management</li>
                        <li>Kinh nghiệm với Agile/Scrum</li>
                        <li>Kỹ năng phân tích dữ liệu với SQL</li>
                        <li>Kinh nghiệm thiết kế UX với Figma</li></ul>`,
            startDate: new Date('2023-06-20'),
            endDate: new Date('2023-12-20'),
            isActive: true,
            isDeleted: false,
          },
          // --- TikTok ---
          {
            name: 'NodeJS Backend Developer',
            skills: [
              'NodeJS',
              'TypeScript',
              'Redis',
              'MongoDB',
              'Microservices',
            ],
            company: { _id: tiktok._id, name: tiktok.name, logo: tiktok.logo },
            location: 'TP.HCM',
            salary: 2500,
            quantity: 7,
            level: 'MIDDLE',
            description: `<p>Xây dựng các backend service phục vụ tính năng livestream và tương tác người dùng trên TikTok.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>2+ năm kinh nghiệm NodeJS</li>
                        <li>Thành thạo TypeScript</li>
                        <li>Kinh nghiệm với Redis, MongoDB</li>
                        <li>Hiểu biết về kiến trúc microservices</li></ul>`,
            startDate: new Date('2023-06-10'),
            endDate: new Date('2023-12-10'),
            isActive: true,
            isDeleted: false,
          },
          {
            name: 'UI/UX Designer',
            skills: [
              'Figma',
              'Adobe XD',
              'Prototyping',
              'User Research',
              'Design System',
            ],
            company: { _id: tiktok._id, name: tiktok.name, logo: tiktok.logo },
            location: 'Hà Nội',
            salary: 1500,
            quantity: 3,
            level: 'MIDDLE',
            description: `<p>Thiết kế trải nghiệm người dùng cho các tính năng mới của TikTok tại thị trường Việt Nam.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>2+ năm kinh nghiệm UI/UX</li>
                        <li>Thành thạo Figma hoặc Adobe XD</li>
                        <li>Có portfolio thực tế</li>
                        <li>Kinh nghiệm user research và usability testing</li></ul>`,
            startDate: new Date('2023-07-01'),
            endDate: new Date('2024-01-01'),
            isActive: true,
            isDeleted: false,
          },
          // --- AWS ---
          {
            name: 'Cloud Solutions Architect',
            skills: [
              'AWS',
              'Azure',
              'Solution Design',
              'Security',
              'Networking',
            ],
            company: { _id: aws._id, name: aws.name, logo: aws.logo },
            location: 'Hà Nội',
            salary: 5000,
            quantity: 2,
            level: 'SENIOR',
            description: `<p>Tư vấn và thiết kế giải pháp cloud cho khách hàng doanh nghiệp lớn tại Việt Nam trên nền tảng AWS.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>5+ năm kinh nghiệm Cloud/Infrastructure</li>
                        <li>Chứng chỉ AWS Solutions Architect Professional</li>
                        <li>Kinh nghiệm tư vấn giải pháp cho doanh nghiệp</li>
                        <li>Kỹ năng trình bày và thuyết phục tốt</li></ul>`,
            startDate: new Date('2023-06-01'),
            endDate: new Date('2023-11-30'),
            isActive: true,
            isDeleted: false,
          },
          // --- Adobe ---
          {
            name: 'Angular Frontend Developer',
            skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'],
            company: { _id: adobe._id, name: adobe.name, logo: adobe.logo },
            location: 'Hà Nội',
            salary: 2800,
            quantity: 4,
            level: 'MIDDLE',
            description: `<p>Phát triển giao diện cho các công cụ sáng tạo web-based của Adobe, phục vụ hàng triệu designer toàn cầu.</p>
                        <h3>Yêu cầu:</h3><ul>
                        <li>3+ năm kinh nghiệm Angular</li>
                        <li>Thành thạo TypeScript và RxJS</li>
                        <li>Kinh nghiệm với NgRx hoặc Akita</li>
                        <li>Quan tâm đến thiết kế và UX</li></ul>`,
            startDate: new Date('2023-06-15'),
            endDate: new Date('2023-12-15'),
            isActive: true,
            isDeleted: false,
          },
        ]);
        this.logger.log('>>> Đã tạo dữ liệu mẫu: Jobs');
      }

      // ---- 6. Resumes ----
      const countResume = await this.resumeModel.count({});
      if (countResume === 0) {
        const normalUser = await this.userModel.findOne({
          email: 'user@gmail.com',
        });
        const jobs = await this.jobModel.find({}).limit(5);

        if (normalUser && jobs.length > 0) {
          const resumeSamples = jobs.map((job, idx) => ({
            email: normalUser.email,
            userId: normalUser._id,
            url: 'public/images/resume/v7.0 Detail React Ultimate (1)-1687444817343.pdf',
            status:
              idx % 3 === 0
                ? 'PENDING'
                : idx % 3 === 1
                ? 'REVIEWING'
                : 'APPROVED',
            companyId: job.company?._id,
            jobId: job._id,
            history: [
              {
                status: 'PENDING',
                updatedAt: new Date('2023-06-20T08:00:00.000Z'),
                updatedBy: { _id: normalUser._id, email: normalUser.email },
              },
            ],
            createdBy: { _id: normalUser._id, email: normalUser.email },
            isDeleted: false,
          }));
          await this.resumeModel.insertMany(resumeSamples);
          this.logger.log('>>> Đã tạo dữ liệu mẫu: Resumes');
        }
      }

      // ---- 7. Subscribers ----
      if (countSubscriber === 0) {
        await this.subscriberModel.insertMany(INIT_SUBSCRIBERS);
        this.logger.log('>>> Đã tạo dữ liệu mẫu: Subscribers');
      }

      if (
        countUser > 0 &&
        countRole > 0 &&
        countPermission > 0 &&
        countCompany > 0 &&
        countJob > 0 &&
        countSubscriber > 0
      ) {
        this.logger.log('>>> ALREADY INIT SAMPLE DATA...');
      }
    }
  }
}
