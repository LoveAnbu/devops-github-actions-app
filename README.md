# 🚀 DevSecOps CI/CD Pipeline with EKS

🌐 **Live Portfolio:** https://loveanbu.github.io/devops-github-actions-app/

---

## 📌 Project Overview

This project demonstrates a **production-style DevSecOps pipeline** built using modern tools and best practices.

It automates:

* Build
* Security scanning
* Containerization
* Deployment to Kubernetes (EKS)

---

## 🏗️ Architecture

![Architecture Diagram](assets/architecture

---

## ⚙️ CI/CD Pipeline Flow

1. Code pushed to GitHub
2. GitHub Actions pipeline triggered
3. Security scans:

   * 🔒 Gitleaks (secrets)
   * 🛡️ OWASP Dependency Check
   * 🔍 SonarCloud
   * 🐳 Trivy (container scan)
4. Docker image build & push to DockerHub
5. Deployment to Kubernetes (EKS)

---

## 🧰 Tech Stack

* **CI/CD:** GitHub Actions
* **Containerization:** Docker
* **Orchestration:** Kubernetes (EKS)
* **Cloud:** AWS
* **Security:** Trivy, Gitleaks, OWASP, SonarCloud
* **App:** Node.js (Express)

---

## 📦 Kubernetes Deployment

* Deployment with rolling updates
* Service: LoadBalancer (AWS ELB)
* Ingress: AWS Load Balancer Controller

---

## 🔐 Security Practices

* Secrets scanning before build
* Dependency vulnerability checks
* Static code analysis
* Container image scanning

---

## 📈 Key Achievements

✔ Fully automated CI/CD pipeline
✔ Secure DevOps workflow (DevSecOps)
✔ Production-style Kubernetes deployment
✔ Live cloud-based application exposure

---

## 🚀 Getting Started

```bash
git clone https://github.com/LoveAnbu/devops-github-actions-app.git
cd devops-github-actions-app
docker build -t myapp .
docker run -p 8000:8000 myapp
```

---

## 👨‍💻 Author

**Anbu (DevOps Engineer)**
🔗 https://github.com/LoveAnbu

---

## ⭐ If you found this useful

Give a ⭐ to support!
