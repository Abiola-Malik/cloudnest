# CloudNest - Store, Share, and Sync Your Files

Welcome to **CloudNest**, a modern cloud storage solution that helps you store, share, and sync your files with ease. Whether it's photos, videos, documents, or other media, CloudNest provides a secure, seamless experience for managing all your digital assets in one place. Built with the latest technologies, CloudNest leverages **Next.js 15** and **Appwrite** to deliver fast, reliable, and secure cloud storage.

## Key Features

- **Store**: Effortlessly upload and store your files (photos, videos, documents, and more) in the cloud.
- **Sync**: Access your files anytime, anywhere, and sync across devices with real-time updates.
- **Share**: Securely share your media with friends, family, or coworkers with just a few clicks.
- **Charts & Analytics**: Visualize your usage and file storage patterns using **Recharts**.
- **Responsive UI**: The app uses **ShadCN** components for a beautiful and consistent user interface.

## Technologies Used

- **Next.js 15**: React-based framework for building fast, SEO-friendly applications.
- **Appwrite**: Backend server to handle authentication, file storage, and cloud database functionalities.
- **Recharts**: A charting library to display storage usage analytics and insights.
- **ShadCN**: TailwindCSS-based component library for building modern UIs quickly and efficiently.
- **React Query**: For efficient data fetching, caching, and synchronization.

## Installation

To get started with **CloudNest** locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Abiola-Malik/cloudnest.git
   cd cloudnest
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables. You'll need an **Appwrite** instance and API credentials. Create a `.env.local` file in the root directory and add the following:

   ```bash
   NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
   NEXT_PUBLIC_APPWRITE_API_KEY=<your-appwrite-api-key>
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see CloudNest in action.

## Usage

Once the app is running, you can start uploading, syncing, and sharing your files. The app also provides analytics on your storage usage, which you can view in the dashboard using **Recharts**.

### File Upload & Syncing

- **Upload files** via the drag-and-drop interface or file picker.
- **Sync files** across all your devices in real-time.
- **Manage files** by organizing them into folders, sharing links, or deleting old files.

### Share Files

- **Secure sharing**: Share files with your contacts by generating private links.
- **Collaborative sharing**: Set permissions for each file to determine who can view or edit.

### Analytics

- Use the **Recharts** dashboard to visualize your storage usage and file trends.

## Contributing

We welcome contributions to improve **CloudNest**! To get started, please fork the repository and submit a pull request with your proposed changes.

### How to Contribute

1. **Fork the repo**: Create a personal copy of the repository.
2. **Clone your fork**:
   ```bash
   git clone https://github.com/Abiola-Malik/cloudnest.git
   cd cloudnest
   ```
3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and commit them:
   ```bash
   git commit -m "Add feature/bugfix description"
   ```
5. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a pull request** from your branch to the `main` branch of the original repository.

### Code Style

- Use **Prettier** and **ESLint** for code formatting and linting.
- Follow the **React** and **Next.js** best practices.
- Ensure that your changes include tests (if applicable).

### Reporting Issues

If you encounter any issues or bugs, please open an issue in the repository with detailed steps to reproduce the problem.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
