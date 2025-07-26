# Sistem Manajemen Siswa

Sistem manajemen data siswa yang dibangun dengan Next.js dan Tailwind CSS, terintegrasi dengan API Laravel backend.

## 🚀 Fitur Utama

### 1. **Authentication System**
- ✅ Login/Register user
- ✅ Email verification
- ✅ Forgot/Reset password
- ✅ Token-based authentication
- ✅ Auto-logout saat token expired

### 2. **Siswa Management**
- ✅ CRUD operasi siswa
- ✅ Multiple phone numbers per siswa
- ✅ Multiple NISN numbers per siswa
- ✅ Many-to-many relationship dengan hobbies
- ✅ Validasi data lengkap

### 3. **Hobby Management**
- ✅ CRUD operasi hobi
- ✅ Relasi dengan siswa
- ✅ Statistik penggunaan hobi

### 4. **User Management**
- ✅ CRUD operasi user (admin)
- ✅ Search dan pagination
- ✅ Email verification status
- ✅ Password management

### 5. **Profile Management**
- ✅ Update profil user
- ✅ Change password
- ✅ Delete account
- ✅ User statistics

### 6. **Dashboard**
- ✅ Statistik real-time
- ✅ Responsive design
- ✅ Mobile-friendly interface

## 🛠️ Teknologi yang Digunakan

### Frontend
- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript
- **Local Storage** - Token management

### Backend API
- **Laravel** - PHP framework
- **Laravel Sanctum** - Authentication
- **MySQL/PostgreSQL** - Database
- **RESTful API** - API endpoints

## 📁 Struktur Project

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Auth/
│   │   ├── LoginForm.js
│   │   └── RegisterForm.js
│   └── Dashboard/
│       ├── Dashboard.js
│       ├── DashboardStats.js
│       ├── HobbyTable.js
│       ├── ProfileForm.js
│       ├── Sidebar.js
│       ├── SiswaTable.js
│       └── UserTable.js
├── config/
│   └── api.js
└── services/
    └── api.js
```

## 🚀 Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
Pastikan backend Laravel sudah berjalan di `http://localhost:8000`

### 3. Jalankan Development Server
```bash
npm run dev
```

### 4. Akses Aplikasi
Buka [http://localhost:3000](http://localhost:3000)

## 📋 API Endpoints

### Authentication
- `POST /api/register` - Register user baru
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/user` - Get current user
- `POST /api/forgot-password` - Forgot password
- `POST /api/reset-password` - Reset password

### Siswa Management
- `GET /api/siswa` - Get all students
- `GET /api/siswa/{id}` - Get single student
- `POST /api/siswa` - Create student
- `PUT /api/siswa/{id}` - Update student
- `DELETE /api/siswa/{id}` - Delete student

### Hobby Management
- `GET /api/hobby` - Get all hobbies
- `POST /api/hobby` - Create hobby

### User Management
- `GET /api/users` - Get all users (paginated)
- `GET /api/users/{id}` - Get single user
- `POST /api/users` - Create user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user
- `GET /api/users/search` - Search users

### Profile Management
- `GET /api/profile` - Get current user profile
- `PUT /api/profile` - Update profile
- `POST /api/profile/change-password` - Change password
- `DELETE /api/profile` - Delete account
- `GET /api/profile/statistics` - Get user statistics

## 🎨 UI/UX Features

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet dan desktop optimized
- ✅ Sidebar collapse di mobile
- ✅ Touch-friendly interface

### Modern UI Components
- ✅ Clean dan minimal design
- ✅ Loading states
- ✅ Error handling
- ✅ Success notifications
- ✅ Modal dialogs
- ✅ Form validation

### User Experience
- ✅ Intuitive navigation
- ✅ Fast loading times
- ✅ Smooth transitions
- ✅ Consistent styling
- ✅ Accessibility features

## 🔐 Security Features

### Authentication
- ✅ JWT token management
- ✅ Auto-logout saat token expired
- ✅ Secure password handling
- ✅ Email verification
- ✅ Password reset functionality

### Data Protection
- ✅ Input validation
- ✅ XSS protection
- ✅ CSRF protection (via Laravel)
- ✅ Secure API communication

## 📊 Database Schema

### Siswa Table
```sql
- id (primary key)
- name (string)
- created_at (timestamp)
- updated_at (timestamp)
```

### Phone Table
```sql
- id (primary key)
- number_phone (string)
- siswa_id (foreign key)
- created_at (timestamp)
- updated_at (timestamp)
```

### Nisns Table
```sql
- id (primary key)
- nisns (string)
- siswa_id (foreign key)
- created_at (timestamp)
- updated_at (timestamp)
```

### Hobby Table
```sql
- id (primary key)
- name (string)
- created_at (timestamp)
- updated_at (timestamp)
```

### Users Table
```sql
- id (primary key)
- name (string)
- email (string, unique)
- password (hashed)
- email_verified_at (timestamp)
- created_at (timestamp)
- updated_at (timestamp)
```

### Pivot Table: siswa_hobbies
```sql
- siswa_id (foreign key)
- hobby_id (foreign key)
- created_at (timestamp)
- updated_at (timestamp)
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Push code ke GitHub
2. Connect repository ke Vercel/Netlify
3. Set environment variables
4. Deploy otomatis

### Backend (Laravel)
1. Setup server dengan PHP 8.1+
2. Install Composer dependencies
3. Setup database
4. Run migrations
5. Configure environment variables

## 🔧 Configuration

### API Base URL
Edit file `src/config/api.js`:
```javascript
export const API_BASE_URL = 'http://localhost:8000/api';
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📝 Development Notes

### Code Structure
- **Components**: Reusable UI components
- **Services**: API communication layer
- **Config**: Configuration files
- **Utils**: Helper functions

### Best Practices
- ✅ Component-based architecture
- ✅ Service layer pattern
- ✅ Error boundary handling
- ✅ Loading state management
- ✅ Form validation
- ✅ Responsive design

### Performance
- ✅ Lazy loading components
- ✅ Optimized images
- ✅ Minimal bundle size
- ✅ Efficient API calls

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

Untuk bantuan dan pertanyaan:
- Email: support@example.com
- Documentation: [Link ke docs]
- Issues: [GitHub Issues]

---

**Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS**
