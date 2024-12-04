# RBAC (Role-Based Access Control) User Interface

## Table of Contents
- [RBAC (Role-Based Access Control) User Interface](#rbac-role-based-access-control-user-interface)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
    - [Roles](#roles)
    - [Add Roles](#add-roles)
    - [Delete Roles](#delete-roles)
    - [View Accounts/Users by Role](#view-accountsusers-by-role)
    - [Search](#search)
    - [Edit Users](#edit-users)
    - [Delete Users](#delete-users)
    - [Toggle User State (Active/Inactive)](#toggle-user-state-activeinactive)
    - [Change Permissions](#change-permissions)
    - [Pagination](#pagination)
    - [Responsivity](#responsivity)
  - [Setup Instructions](#setup-instructions)
    - [Step 1: Clone the Repository](#step-1-clone-the-repository)
    - [Step 2: Install Dependencies](#step-2-install-dependencies)
    - [Step 3: Start the Application](#step-3-start-the-application)
    - [Step 4: Build the Application (Optional)](#step-4-build-the-application-optional)
  - [Technologies Used](#technologies-used)

## Project Overview

The RBAC (Role-Based Access Control) User Interface allows administrators to manage users based on their roles within an organization. It provides a comprehensive set of functionalities for viewing, adding, editing, deleting users, and managing their permissions. This project is designed to make user management easy, efficient, and secure with a responsive and user-friendly interface.

## Features

### Roles
- **Role Management**: The system allows for multiple predefined roles such as `Super Admin`, `Manager`, and `Accountant`. Each role has different levels of permissions and access.
- **Role Assignment**: Each user is assigned a role that defines their access to different resources within the system.

### Add Roles
- Administrators can create new roles, assigning specific permissions and access restrictions to them. This functionality ensures that users are assigned roles that suit their level of responsibility and access.

### Delete Roles
- Admins can delete roles from the system. This will affect any users assigned to the role, and a reassignment will be required.

### View Accounts/Users by Role
- Users can be filtered by role. This allows administrators to view and manage users under specific roles for better access control.

### Search
- The system includes a search functionality that allows administrators to search users by their name or email address. This helps in quick retrieval of user data, especially when dealing with a large user base.

### Edit Users
- Admins can edit user information such as name, email, role, and permissions. This feature allows for updating user profiles without deleting and recreating accounts.

### Delete Users
- Users can be deleted from the system. Once deleted, their data will be permanently removed, making it essential for admins to confirm this action.

### Toggle User State (Active/Inactive)
- Administrators can toggle the user's active state. This allows the system to temporarily deactivate users without removing their information, keeping their data intact for potential reactivation.

### Change Permissions
- Admins can manage user permissions, allowing different roles to have different access levels to the application’s features and data. This ensures that only authorized users can perform certain actions.

### Pagination
- The interface supports pagination for the user list, ensuring that the application can handle large datasets efficiently. The number of users per page is configurable, and users can navigate between pages easily.

### Responsivity
- The UI is fully responsive, ensuring that it works on all screen sizes, from mobile phones to large desktop monitors. It uses a mobile-first design approach, providing a smooth user experience across all devices.

## Setup Instructions

To run the RBAC User Interface locally, follow these steps:

### Step 1: Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/vansh-codes/rbac-ui.git
```

### Step 2: Install Dependencies
Navigate into the project directory and install the required dependencies:

```bash
cd rbac-ui
pnpm i
```

### Step 3: Start the Application
Start the development server:

```bash
pnpm run dev
```

it will run



## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **React-Icons**: Library for adding icons.
- **Toastify**: For displaying notifications and alerts.
