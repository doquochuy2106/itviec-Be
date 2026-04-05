export const ADMIN_ROLE = 'SUPER_ADMIN';
export const USER_ROLE = 'NORMAL_USER';

export const INIT_PERMISSIONS = [
  {
    _id: '648ab415f4328bd3153ee211',
    name: 'Get Company with paginate',
    apiPath: '/api/v1/companies',
    method: 'GET',
    module: 'COMPANIES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:47:49.369Z',
    updatedAt: '2023-06-15T06:54:05.131Z',
    __v: 0,
    updatedBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
  },
  {
    _id: '648ab436f4328bd3153ee216',
    name: 'Create Company',
    apiPath: '/api/v1/companies',
    method: 'POST',
    module: 'COMPANIES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:48:22.224Z',
    updatedAt: '2023-06-15T06:48:22.224Z',
    __v: 0,
  },
  {
    _id: '648ab4d5f4328bd3153ee21b',
    name: 'Update Company',
    apiPath: '/api/v1/companies/:id',
    method: 'PATCH',
    module: 'COMPANIES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:51:01.241Z',
    updatedAt: '2023-06-15T06:51:01.241Z',
    __v: 0,
  },
  {
    _id: '648ab4ebf4328bd3153ee220',
    name: 'Delete Company',
    apiPath: '/api/v1/companies/:id',
    method: 'DELETE',
    module: 'COMPANIES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:51:23.973Z',
    updatedAt: '2023-06-15T06:51:23.973Z',
    __v: 0,
  },
  {
    _id: '648ab5a8072f2a2ef910638d',
    name: 'Get Company by id',
    apiPath: '/api/v1/companies/:id',
    method: 'GET',
    module: 'COMPANIES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:54:32.799Z',
    updatedAt: '2023-06-15T06:54:32.799Z',
    __v: 0,
  },
  {
    _id: '648ab6d3fa16b294212e4033',
    name: 'Create User',
    apiPath: '/api/v1/users',
    method: 'POST',
    module: 'USERS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:31.898Z',
    updatedAt: '2023-06-15T06:59:31.898Z',
    __v: 0,
  },
  {
    _id: '648ab6e7fa16b294212e4038',
    name: 'Get User by Id',
    apiPath: '/api/v1/users/:id',
    method: 'GET',
    module: 'USERS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T06:59:51.041Z',
    updatedAt: '2023-06-15T06:59:51.041Z',
    __v: 0,
  },
  {
    _id: '648ab6fdfa16b294212e403d',
    name: 'Get User with paginate',
    apiPath: '/api/v1/users',
    method: 'GET',
    module: 'USERS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:13.364Z',
    updatedAt: '2023-06-15T07:00:13.364Z',
    __v: 0,
  },
  {
    _id: '648ab719fa16b294212e4042',
    name: 'Update User',
    apiPath: '/api/v1/users/:id',
    method: 'PATCH',
    module: 'USERS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:41.934Z',
    updatedAt: '2023-06-15T07:00:41.934Z',
    __v: 0,
  },
  {
    _id: '648ab728fa16b294212e4047',
    name: 'Delete User',
    apiPath: '/api/v1/users/:id',
    method: 'DELETE',
    module: 'USERS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:00:56.274Z',
    updatedAt: '2023-06-15T07:00:56.274Z',
    __v: 0,
  },
  {
    _id: '648ab750fa16b294212e404c',
    name: 'Upload Single File',
    apiPath: '/api/v1/files/upload',
    method: 'POST',
    module: 'FILES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T07:01:36.923Z',
    updatedAt: '2023-06-15T07:01:36.923Z',
    __v: 0,
  },
  {
    _id: '648ad488dafdb9754f40b846',
    name: 'Create a Job',
    apiPath: '/api/v1/jobs',
    method: 'POST',
    module: 'JOBS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:16.508Z',
    updatedAt: '2023-06-15T09:06:16.508Z',
    __v: 0,
  },
  {
    _id: '648ad499dafdb9754f40b84b',
    name: 'Get a job by id',
    apiPath: '/api/v1/jobs/:id',
    method: 'GET',
    module: 'JOBS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:33.697Z',
    updatedAt: '2023-06-15T09:06:33.697Z',
    __v: 0,
  },
  {
    _id: '648ad4a6dafdb9754f40b850',
    name: 'Update a Job',
    apiPath: '/api/v1/jobs/:id',
    method: 'PATCH',
    module: 'JOBS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:06:46.085Z',
    updatedAt: '2023-06-15T09:06:46.085Z',
    __v: 0,
  },
  {
    _id: '648ad4ccdafdb9754f40b859',
    name: 'Get Job with paginate',
    apiPath: '/api/v1/jobs',
    method: 'GET',
    module: 'JOBS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:07:24.175Z',
    updatedAt: '2023-06-15T09:07:24.175Z',
    __v: 0,
  },
  {
    _id: '648ad4d9dafdb9754f40b85e',
    name: 'Delete a Job',
    apiPath: '/api/v1/jobs/:id',
    method: 'DELETE',
    module: 'JOBS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:07:37.896Z',
    updatedAt: '2023-06-15T09:07:37.896Z',
    __v: 0,
  },
  {
    _id: '648ad4fedafdb9754f40b863',
    name: 'Create a Resume',
    apiPath: '/api/v1/resumes',
    method: 'POST',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:14.659Z',
    updatedAt: '2023-06-15T09:08:14.659Z',
    __v: 0,
  },
  {
    _id: '648ad511dafdb9754f40b868',
    name: 'Fetch resume with paginate',
    apiPath: '/api/v1/resumes',
    method: 'GET',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:33.395Z',
    updatedAt: '2023-06-15T09:08:33.395Z',
    __v: 0,
  },
  {
    _id: '648ad522dafdb9754f40b86d',
    name: 'Get resume by id',
    apiPath: '/api/v1/resumes/:id',
    method: 'GET',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:08:50.801Z',
    updatedAt: '2023-06-15T09:08:50.801Z',
    __v: 0,
  },
  {
    _id: '648ad53bdafdb9754f40b872',
    name: 'Delete a resume',
    apiPath: '/api/v1/resumes/:id',
    method: 'DELETE',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:09:15.785Z',
    updatedAt: '2023-06-15T09:09:15.785Z',
    __v: 0,
  },
  {
    _id: '648ad555dafdb9754f40b877',
    name: 'Update resume status',
    apiPath: '/api/v1/resumes/:id',
    method: 'PATCH',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:09:41.694Z',
    updatedAt: '2023-06-15T09:09:41.694Z',
    __v: 0,
  },
  {
    _id: '648ad56ddafdb9754f40b87c',
    name: 'Fetch resumes by user',
    apiPath: '/api/v1/resumes/by-user',
    method: 'POST',
    module: 'RESUMES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:10:05.961Z',
    updatedAt: '2023-06-15T09:10:05.961Z',
    __v: 0,
  },
  {
    _id: '648ad59adafdb9754f40b881',
    name: 'Create a permission',
    apiPath: '/api/v1/permissions',
    method: 'POST',
    module: 'PERMISSIONS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:10:50.946Z',
    updatedAt: '2023-06-15T09:10:50.946Z',
    __v: 0,
  },
  {
    _id: '648ad5aedafdb9754f40b886',
    name: 'Fetch Permission with paginate',
    apiPath: '/api/v1/permissions',
    method: 'GET',
    module: 'PERMISSIONS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:10.914Z',
    updatedAt: '2023-06-15T09:11:10.914Z',
    __v: 0,
  },
  {
    _id: '648ad5c5dafdb9754f40b88b',
    name: 'Fetch permission by id',
    apiPath: '/api/v1/permissions/:id',
    method: 'GET',
    module: 'PERMISSIONS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:33.234Z',
    updatedAt: '2023-06-15T09:11:33.234Z',
    __v: 0,
  },
  {
    _id: '648ad5d4dafdb9754f40b890',
    name: 'Update a permission',
    apiPath: '/api/v1/permissions/:id',
    method: 'PATCH',
    module: 'PERMISSIONS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:11:48.081Z',
    updatedAt: '2023-06-15T09:11:48.081Z',
    __v: 0,
  },
  {
    _id: '648ad5ebdafdb9754f40b895',
    name: 'Delete a permission',
    apiPath: '/api/v1/permissions/:id',
    method: 'DELETE',
    module: 'PERMISSIONS',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:11.323Z',
    updatedAt: '2023-06-15T09:12:11.323Z',
    __v: 0,
  },
  {
    _id: '648ad613dafdb9754f40b89a',
    name: 'Create Role',
    apiPath: '/api/v1/roles',
    method: 'POST',
    module: 'ROLES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:12:51.974Z',
    updatedAt: '2023-06-15T09:12:51.974Z',
    __v: 0,
  },
  {
    _id: '648ad622dafdb9754f40b89f',
    name: 'Fetch roles with paginate',
    apiPath: '/api/v1/roles',
    method: 'GET',
    module: 'ROLES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:06.618Z',
    updatedAt: '2023-06-15T09:13:06.618Z',
    __v: 0,
  },
  {
    _id: '648ad630dafdb9754f40b8a6',
    name: 'Fetch role by id',
    apiPath: '/api/v1/roles/:id',
    method: 'GET',
    module: 'ROLES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:20.853Z',
    updatedAt: '2023-06-15T09:13:20.853Z',
    __v: 0,
  },
  {
    _id: '648ad640dafdb9754f40b8ab',
    name: 'Update Role',
    apiPath: '/api/v1/roles/:id',
    method: 'PATCH',
    module: 'ROLES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:36.836Z',
    updatedAt: '2023-06-15T09:13:36.836Z',
    __v: 0,
  },
  {
    _id: '648ad650dafdb9754f40b8b0',
    name: 'Delete a Role',
    apiPath: '/api/v1/roles/:id',
    method: 'DELETE',
    module: 'ROLES',
    createdBy: { _id: '647b5108a8a243e8191855b5', email: 'hoidanit@gmail.com' },
    isDeleted: false,
    deletedAt: null,
    createdAt: '2023-06-15T09:13:52.798Z',
    updatedAt: '2023-06-15T09:13:52.798Z',
    __v: 0,
  },
];

// ==================== COMPANIES ====================
export const INIT_COMPANIES = [
  {
    name: 'Google Vietnam',
    address: 'Tòa nhà Etown, 364 Cộng Hòa, Phường 13, Tân Bình, TP.HCM',
    description: `<p>Google LLC là một công ty công nghệ đa quốc gia của Mỹ, chuyên về các dịch vụ và sản phẩm liên quan đến Internet. 
        Tại Việt Nam, Google có văn phòng đại diện và nhiều đối tác chiến lược. Chúng tôi luôn tìm kiếm những tài năng xuất sắc 
        để cùng nhau xây dựng tương lai số.</p>`,
    logo: 'google-1686574998397.png',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:00:00.000Z'),
    updatedAt: new Date('2023-06-12T07:00:00.000Z'),
  },
  {
    name: 'Shopee Vietnam',
    address:
      'Tòa nhà Mapletree Business Centre, 1060 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM',
    description: `<p>Shopee là nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan. Được ra mắt vào năm 2015, 
        Shopee hiện diện tại Singapore, Malaysia, Thái Lan, Đài Loan, Indonesia, Việt Nam và Philippines. 
        Shopee cung cấp cho người dùng trải nghiệm mua sắm dễ dàng, an toàn và nhanh chóng.</p>`,
    logo: 'shopee-1686575294231.png',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:05:00.000Z'),
    updatedAt: new Date('2023-06-12T07:05:00.000Z'),
  },
  {
    name: 'Tiki Corporation',
    address:
      'Tòa nhà Viettel, 285 Cách Mạng Tháng 8, Phường 12, Quận 10, TP.HCM',
    description: `<p>Tiki là một trong những sàn thương mại điện tử lớn nhất Việt Nam, nổi tiếng với dịch vụ giao hàng 
        nhanh TikiNOW. Với hơn 30 triệu sản phẩm từ hàng trăm ngàn nhà bán hàng, Tiki cam kết mang đến trải nghiệm mua sắm 
        tốt nhất cho người dùng Việt Nam.</p>`,
    logo: 'tiki-1686575455267.jpg',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:10:00.000Z'),
    updatedAt: new Date('2023-06-12T07:10:00.000Z'),
  },
  {
    name: 'Netflix Vietnam',
    address:
      'Tòa nhà Deutsches Haus, 33 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM',
    description: `<p>Netflix là dịch vụ streaming giải trí hàng đầu thế giới với hơn 200 triệu thành viên tại hơn 190 quốc gia. 
        Chúng tôi đang mở rộng đội ngũ kỹ thuật tại Việt Nam để phát triển các sản phẩm sáng tạo phục vụ người dùng toàn cầu.</p>`,
    logo: 'netflix-1686706116042.png',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:15:00.000Z'),
    updatedAt: new Date('2023-06-12T07:15:00.000Z'),
  },
  {
    name: 'Lazada Vietnam',
    address: 'Tòa nhà Anh Linh, 34 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, TP.HCM',
    description: `<p>Lazada là nền tảng thương mại điện tử hàng đầu Đông Nam Á, được thành lập năm 2012. 
        Với sự hỗ trợ từ Alibaba Group, Lazada hiện phục vụ hàng triệu người mua và người bán trên khắp khu vực. 
        Chúng tôi đang tìm kiếm những nhân tài công nghệ để tiếp tục sứ mệnh số hóa thương mại khu vực.</p>`,
    logo: 'lazada-1686575062887.png',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:20:00.000Z'),
    updatedAt: new Date('2023-06-12T07:20:00.000Z'),
  },
  {
    name: 'TikTok Vietnam',
    address: 'Tòa nhà Bitexco Financial Tower, 2 Hải Triều, Quận 1, TP.HCM',
    description: `<p>TikTok là nền tảng mạng xã hội video ngắn thuộc ByteDance, với hàng tỷ người dùng toàn cầu. 
        Văn phòng Việt Nam của TikTok tập trung vào phát triển nội dung, chính sách và công nghệ phục vụ thị trường 
        Đông Nam Á đang tăng trưởng mạnh mẽ.</p>`,
    logo: 'tiktok-1686575523674.jpg',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:25:00.000Z'),
    updatedAt: new Date('2023-06-12T07:25:00.000Z'),
  },
  {
    name: 'Amazon Web Services Vietnam',
    address: 'Tòa nhà Lotte, 54 Liễu Giai, Ba Đình, Hà Nội',
    description: `<p>Amazon Web Services (AWS) là nền tảng đám mây toàn diện và được áp dụng rộng rãi nhất thế giới. 
        AWS cung cấp hơn 200 dịch vụ đa năng từ các trung tâm dữ liệu trên toàn cầu. Chúng tôi đang tìm kiếm 
        các kỹ sư tài năng để phát triển hạ tầng đám mây thế hệ mới.</p>`,
    logo: 'amzon-1686574798358.jpg',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:30:00.000Z'),
    updatedAt: new Date('2023-06-12T07:30:00.000Z'),
  },
  {
    name: 'Adobe Vietnam',
    address: 'Tòa nhà Vietcombank, 198 Trần Quang Khải, Hoàn Kiếm, Hà Nội',
    description: `<p>Adobe là công ty phần mềm đa quốc gia chuyên về phần mềm sáng tạo và kỹ thuật số. 
        Với các sản phẩm như Photoshop, Illustrator, Premiere và Creative Cloud, Adobe đang tạo ra tương lai 
        của sáng tạo kỹ thuật số. Chúng tôi tuyển dụng các kỹ sư và chuyên gia sáng tạo hàng đầu.</p>`,
    logo: 'photoshop-1686575180007.png',
    isDeleted: false,
    createdAt: new Date('2023-06-12T07:35:00.000Z'),
    updatedAt: new Date('2023-06-12T07:35:00.000Z'),
  },
];

// ==================== JOBS ====================
// Jobs được định nghĩa trực tiếp trong databases.service.ts
// để đảm bảo lấy đúng _id từ MongoDB sau khi companies đã được insert.
// File này KHÔNG export INIT_JOBS nữa.
const _REMOVED_INIT_JOBS = (companies: any[]) => {
  const google = companies.find((c) => c.name === 'Google Vietnam');
  const shopee = companies.find((c) => c.name === 'Shopee Vietnam');
  const tiki = companies.find((c) => c.name === 'Tiki Corporation');
  const netflix = companies.find((c) => c.name === 'Netflix Vietnam');
  const lazada = companies.find((c) => c.name === 'Lazada Vietnam');
  const tiktok = companies.find((c) => c.name === 'TikTok Vietnam');
  const aws = companies.find((c) => c.name === 'Amazon Web Services Vietnam');
  const adobe = companies.find((c) => c.name === 'Adobe Vietnam');

  return [
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
            <h3>Yêu cầu:</h3>
            <ul>
              <li>Tối thiểu 3 năm kinh nghiệm với ReactJS</li>
              <li>Kinh nghiệm với NestJS hoặc Express.js</li>
              <li>Thành thạo TypeScript và MongoDB</li>
              <li>Hiểu biết về Docker và CI/CD</li>
            </ul>
            <h3>Quyền lợi:</h3>
            <ul>
              <li>Lương cạnh tranh từ $2000 - $3000</li>
              <li>Thưởng hiệu suất hàng quý</li>
              <li>Môi trường làm việc quốc tế</li>
            </ul>`,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-12-31'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-10T08:00:00.000Z'),
      updatedAt: new Date('2023-06-10T08:00:00.000Z'),
    },
    {
      name: 'Backend Engineer - Go / Kubernetes',
      skills: ['Golang', 'Kubernetes', 'gRPC', 'PostgreSQL', 'Redis'],
      company: { _id: google._id, name: google.name, logo: google.logo },
      location: 'Hà Nội',
      salary: 4000,
      quantity: 3,
      level: 'SENIOR',
      description: `<p>Tham gia nhóm kỹ thuật cốt lõi phát triển hệ thống phân tán quy mô lớn của Google tại Việt Nam.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>Tối thiểu 4 năm kinh nghiệm với Golang</li>
              <li>Kinh nghiệm triển khai hệ thống trên Kubernetes</li>
              <li>Hiểu biết sâu về gRPC, message queue</li>
              <li>Kỹ năng xử lý dữ liệu lớn</li>
            </ul>`,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-11-30'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-10T08:10:00.000Z'),
      updatedAt: new Date('2023-06-10T08:10:00.000Z'),
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
      description: `<p>Shopee tuyển dụng <b>Frontend Developer</b> để phát triển giao diện người dùng cho nền tảng thương mại điện tử hàng đầu Đông Nam Á.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>2+ năm kinh nghiệm với ReactJS</li>
              <li>Thành thạo HTML5, CSS3, JavaScript ES6+</li>
              <li>Kinh nghiệm với Redux hoặc Zustand</li>
              <li>Hiểu biết về responsive design và cross-browser compatibility</li>
            </ul>
            <h3>Quyền lợi:</h3>
            <ul>
              <li>Lương từ $1200 - $1800</li>
              <li>Thưởng lễ, tết đầy đủ</li>
              <li>Bảo hiểm sức khỏe cao cấp</li>
              <li>Cơ hội làm việc với đội ngũ quốc tế</li>
            </ul>`,
      startDate: new Date('2023-06-15'),
      endDate: new Date('2023-12-15'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-11T08:00:00.000Z'),
      updatedAt: new Date('2023-06-11T08:00:00.000Z'),
    },
    {
      name: 'Data Engineer',
      skills: ['Python', 'Apache Spark', 'Kafka', 'AWS', 'SQL'],
      company: { _id: shopee._id, name: shopee.name, logo: shopee.logo },
      location: 'TP.HCM',
      salary: 2500,
      quantity: 4,
      level: 'SENIOR',
      description: `<p>Xây dựng và vận hành hệ thống data pipeline phục vụ phân tích dữ liệu người dùng và hành vi mua sắm trên nền tảng Shopee.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>3+ năm kinh nghiệm Data Engineering</li>
              <li>Thành thạo Python, SQL</li>
              <li>Kinh nghiệm với Apache Spark, Kafka</li>
              <li>Hiểu biết về AWS hoặc GCP</li>
            </ul>`,
      startDate: new Date('2023-06-20'),
      endDate: new Date('2024-01-20'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-11T09:00:00.000Z'),
      updatedAt: new Date('2023-06-11T09:00:00.000Z'),
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
      description: `<p>Tiki tìm kiếm <b>Mobile Developer</b> để phát triển ứng dụng di động với hàng triệu người dùng trên cả iOS và Android.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>2+ năm kinh nghiệm với React Native</li>
              <li>Thành thạo TypeScript</li>
              <li>Kinh nghiệm publish app lên App Store và Google Play</li>
              <li>Hiểu biết về performance optimization</li>
            </ul>`,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-12-01'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-12T08:00:00.000Z'),
      updatedAt: new Date('2023-06-12T08:00:00.000Z'),
    },
    {
      name: 'Java Backend Developer',
      skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'RabbitMQ'],
      company: { _id: tiki._id, name: tiki.name, logo: tiki.logo },
      location: 'TP.HCM',
      salary: 2200,
      quantity: 5,
      level: 'MIDDLE',
      description: `<p>Phát triển và duy trì các microservices backend phục vụ hệ thống order management và logistics của Tiki.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>2+ năm kinh nghiệm Java Spring Boot</li>
              <li>Kinh nghiệm kiến trúc microservices</li>
              <li>Thành thạo MySQL, Redis</li>
              <li>Hiểu biết về message queue (RabbitMQ, Kafka)</li>
            </ul>`,
      startDate: new Date('2023-07-01'),
      endDate: new Date('2024-01-01'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-12T09:00:00.000Z'),
      updatedAt: new Date('2023-06-12T09:00:00.000Z'),
    },
    // --- Netflix ---
    {
      name: 'DevOps Engineer',
      skills: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Kubernetes'],
      company: { _id: netflix._id, name: netflix.name, logo: netflix.logo },
      location: 'TP.HCM',
      salary: 3500,
      quantity: 2,
      level: 'SENIOR',
      description: `<p>Xây dựng và vận hành hạ tầng cloud cho Netflix tại thị trường Đông Nam Á, đảm bảo tính sẵn sàng cao và hiệu suất tối ưu.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>4+ năm kinh nghiệm DevOps/Cloud</li>
              <li>Thành thạo AWS hoặc GCP</li>
              <li>Kinh nghiệm với Terraform, Ansible</li>
              <li>Kinh nghiệm với Kubernetes ở môi trường production</li>
            </ul>`,
      startDate: new Date('2023-06-15'),
      endDate: new Date('2023-12-15'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-13T08:00:00.000Z'),
      updatedAt: new Date('2023-06-13T08:00:00.000Z'),
    },
    {
      name: 'Machine Learning Engineer',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Spark'],
      company: { _id: netflix._id, name: netflix.name, logo: netflix.logo },
      location: 'Hà Nội',
      salary: 4500,
      quantity: 2,
      level: 'SENIOR',
      description: `<p>Phát triển hệ thống gợi ý nội dung (recommendation system) và các mô hình AI/ML phục vụ cá nhân hóa trải nghiệm xem phim cho người dùng Netflix.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>4+ năm kinh nghiệm ML/AI</li>
              <li>Thành thạo Python, TensorFlow hoặc PyTorch</li>
              <li>Kinh nghiệm với hệ thống recommendation</li>
              <li>Hiểu biết về MLOps và deployment pipeline</li>
            </ul>`,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-12-31'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-13T09:00:00.000Z'),
      updatedAt: new Date('2023-06-13T09:00:00.000Z'),
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
      description: `<p>Cơ hội tuyệt vời cho các bạn mới ra trường hoặc có dưới 1 năm kinh nghiệm muốn gia nhập đội ngũ frontend tại Lazada.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>Kiến thức nền tảng HTML, CSS, JavaScript</li>
              <li>Đã học hoặc có kinh nghiệm với VueJS hoặc ReactJS</li>
              <li>Ham học hỏi, chủ động trong công việc</li>
              <li>Kỹ năng làm việc nhóm tốt</li>
            </ul>
            <h3>Quyền lợi:</h3>
            <ul>
              <li>Được mentoring bởi senior developer</li>
              <li>Lộ trình thăng tiến rõ ràng</li>
              <li>Môi trường học tập và phát triển</li>
            </ul>`,
      startDate: new Date('2023-07-01'),
      endDate: new Date('2024-06-30'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-14T08:00:00.000Z'),
      updatedAt: new Date('2023-06-14T08:00:00.000Z'),
    },
    {
      name: 'Product Manager',
      skills: ['Product Management', 'Agile', 'SQL', 'Figma', 'A/B Testing'],
      company: { _id: lazada._id, name: lazada.name, logo: lazada.logo },
      location: 'TP.HCM',
      salary: 3000,
      quantity: 2,
      level: 'SENIOR',
      description: `<p>Dẫn dắt phát triển sản phẩm cho mảng Seller Center của Lazada Việt Nam, phục vụ hàng chục nghìn nhà bán hàng.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>3+ năm kinh nghiệm Product Management</li>
              <li>Kinh nghiệm với Agile/Scrum</li>
              <li>Kỹ năng phân tích dữ liệu với SQL</li>
              <li>Kinh nghiệm thiết kế UX với Figma</li>
            </ul>`,
      startDate: new Date('2023-06-20'),
      endDate: new Date('2023-12-20'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-14T09:00:00.000Z'),
      updatedAt: new Date('2023-06-14T09:00:00.000Z'),
    },
    // --- TikTok ---
    {
      name: 'NodeJS Backend Developer',
      skills: ['NodeJS', 'TypeScript', 'Redis', 'MongoDB', 'Microservices'],
      company: { _id: tiktok._id, name: tiktok.name, logo: tiktok.logo },
      location: 'TP.HCM',
      salary: 2500,
      quantity: 7,
      level: 'MIDDLE',
      description: `<p>Xây dựng các backend service phục vụ tính năng livestream, comment và tương tác người dùng trên nền tảng TikTok.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>2+ năm kinh nghiệm NodeJS</li>
              <li>Thành thạo TypeScript</li>
              <li>Kinh nghiệm với Redis, MongoDB</li>
              <li>Hiểu biết về kiến trúc microservices</li>
            </ul>`,
      startDate: new Date('2023-06-10'),
      endDate: new Date('2023-12-10'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-15T08:00:00.000Z'),
      updatedAt: new Date('2023-06-15T08:00:00.000Z'),
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
      description: `<p>Thiết kế trải nghiệm người dùng cho các tính năng mới của TikTok tại thị trường Việt Nam và Đông Nam Á.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>2+ năm kinh nghiệm UI/UX</li>
              <li>Thành thạo Figma hoặc Adobe XD</li>
              <li>Có portfolio thực tế</li>
              <li>Kinh nghiệm user research và usability testing</li>
            </ul>`,
      startDate: new Date('2023-07-01'),
      endDate: new Date('2024-01-01'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-15T09:00:00.000Z'),
      updatedAt: new Date('2023-06-15T09:00:00.000Z'),
    },
    // --- AWS ---
    {
      name: 'Cloud Solutions Architect',
      skills: ['AWS', 'Azure', 'Solution Design', 'Security', 'Networking'],
      company: { _id: aws._id, name: aws.name, logo: aws.logo },
      location: 'Hà Nội',
      salary: 5000,
      quantity: 2,
      level: 'SENIOR',
      description: `<p>Tư vấn và thiết kế giải pháp cloud cho khách hàng doanh nghiệp lớn tại Việt Nam, giúp họ chuyển đổi số thành công trên AWS.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>5+ năm kinh nghiệm Cloud/Infrastructure</li>
              <li>Chứng chỉ AWS Solutions Architect Professional</li>
              <li>Kinh nghiệm tư vấn giải pháp cho doanh nghiệp</li>
              <li>Kỹ năng trình bày và thuyết phục tốt</li>
            </ul>`,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-11-30'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-16T08:00:00.000Z'),
      updatedAt: new Date('2023-06-16T08:00:00.000Z'),
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
      description: `<p>Phát triển giao diện cho các công cụ sáng tạo web-based của Adobe, phục vụ hàng triệu designer và creative professional toàn cầu.</p>
            <h3>Yêu cầu:</h3>
            <ul>
              <li>3+ năm kinh nghiệm Angular</li>
              <li>Thành thạo TypeScript và RxJS</li>
              <li>Kinh nghiệm với NgRx hoặc Akita</li>
              <li>Quan tâm đến thiết kế và UX</li>
            </ul>`,
      startDate: new Date('2023-06-15'),
      endDate: new Date('2023-12-15'),
      isActive: true,
      isDeleted: false,
      createdAt: new Date('2023-06-17T08:00:00.000Z'),
      updatedAt: new Date('2023-06-17T08:00:00.000Z'),
    },
  ];
};

// ==================== SUBSCRIBERS ====================
export const INIT_SUBSCRIBERS = [
  {
    email: 'user@gmail.com',
    name: 'Normal User',
    skills: ['ReactJS', 'NodeJS', 'TypeScript'],
    isDeleted: false,
    createdAt: new Date('2023-06-15T10:00:00.000Z'),
    updatedAt: new Date('2023-06-15T10:00:00.000Z'),
  },
  {
    email: 'dev1@example.com',
    name: 'Nguyễn Văn An',
    skills: ['Java', 'Spring Boot', 'MySQL'],
    isDeleted: false,
    createdAt: new Date('2023-06-15T10:10:00.000Z'),
    updatedAt: new Date('2023-06-15T10:10:00.000Z'),
  },
  {
    email: 'dev2@example.com',
    name: 'Trần Thị Bích',
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    isDeleted: false,
    createdAt: new Date('2023-06-15T10:20:00.000Z'),
    updatedAt: new Date('2023-06-15T10:20:00.000Z'),
  },
  {
    email: 'designer@example.com',
    name: 'Lê Minh Châu',
    skills: ['Figma', 'UI/UX', 'Adobe XD'],
    isDeleted: false,
    createdAt: new Date('2023-06-15T10:30:00.000Z'),
    updatedAt: new Date('2023-06-15T10:30:00.000Z'),
  },
];
