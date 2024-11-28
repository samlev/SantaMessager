# **ZProfit**

**ZProfit** is a modern, scalable stock management and analytics application built using TypeScript, React for the frontend, and a robust .NET backend. This project is designed for efficient development and quick start-up using commonly utilized snippets and best practices.

---

## **Features**

- 🌟 **Frontend**: Built with React and TypeScript, using JSX for a seamless integration of JavaScript and HTML.
- 🚀 **Backend**: Powered by a .NET Core API for high performance and scalability.
- 🔄 **Real-Time Data**: Stock data updates dynamically for up-to-the-minute analytics.
- 🛠️ **Developer-Friendly**: Supports time-saving snippets and linting tools for rapid development.

---

## **Tech Stack**

### **Frontend**
- **React (TypeScript)**: A component-based library for building user interfaces.
- **JSX**: Syntax extension to JavaScript, translating directly into HTML for intuitive development.
- **Snippets**:
   - **JavaScript and TypeScript Nightly**
   - **ES7 React/Redux/GraphQL/React-Native snippets**

### **Backend**
- **.NET Core**: A cross-platform framework for building high-performance APIs.
- **Entity Framework Core**: For database management and object-relational mapping (ORM).

### **Linting & Formatting**
- **ESLint**: Ensures consistent coding standards across the project.
- **Prettier**: For automatic code formatting.

---

## **Getting Started**

### **Prerequisites**

Ensure the following are installed on your system:
- **Node.js**: For running the React frontend.
- **.NET Core SDK**: For building and running the backend.
- **Yarn** (or **npm**): For managing frontend dependencies.

### **Installation**

1. Clone the repository:
    ```bash
    git clone https://github.com/username/ZProfit.git
    cd ZProfit
    ```

2. Install frontend dependencies:
    ```bash
    cd frontend
    yarn install
    ```

3. Install backend dependencies:
    ```bash
    cd ../backend
    dotnet restore
    ```

4. Install additional dependencies:
    ```bash
    npm install react-router-dom
    npm install --save-dev @types/react-router
    npm install @clerk/nextjs
    ```

### **Running the Application**

1. **Start the Backend**:
    ```bash
    cd backend
    dotnet run
    ```

2. **Start the Frontend**:
    ```bash
    cd ../frontend
    yarn start
    ```

3. Visit the application at **[http://localhost:3000](http://localhost:3000)**.

---

## **Developer Workflow**

### **Snippets for Speed**
- Use **JavaScript and TypeScript Nightly** for quick typing support.
- Utilize **ES7 React/Redux/GraphQL/React-Native snippets** for:
   - Component creation (`rfc`, `rcc`).
   - Redux connections (`rconnect`).
   - Hook snippets (`useState`, `useEffect`).

### **JSX Usage**
- Write components using JSX for a seamless blend of logic and UI.
- JSX will be compiled to React elements, allowing you to focus on structure and functionality without worrying about manual conversions.

### **Linting**
- Run **ESLint** regularly to catch potential bugs and maintain clean code:
   ```bash
   yarn lint
   ```

FAQ
Set the node_options environemtn
set NODE_OPTIONS=--openssl-legacy-provider
---

## **Contributing**

1. Fork the repository and create your branch:
    ```bash
    git checkout -b feature/your-feature
    ```

2. Commit your changes:
    ```bash
    git commit -m "Add your feature"
    ```

3. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```

4. Open a pull request!

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for details.
