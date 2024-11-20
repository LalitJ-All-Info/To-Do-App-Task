# Deploying a Node.js To-Do Application on a Virtual Machine

## 1. Create a Virtual Machine
Set up a new virtual machine using your preferred cloud provider (e.g., AWS, Azure, GCP) or local virtualisation software.
Configure the VM as required.
![1](https://github.com/user-attachments/assets/7f630115-7a49-4a6d-adeb-387c611b067d)


## 2. Log in to the VM via SSH
![2](https://github.com/user-attachments/assets/4faf578f-ed92-437c-8da3-217ab094aafc)

## 3. Grant Full Permissions to a User
Switch to the root user:
![3](https://github.com/user-attachments/assets/7db32ce4-22df-4bf4-8556-2f3fe1ea5078)
## 4. Update and Upgrade the Machine
```
sudo apt update
sudo apt upgrade -y
```
![4](https://github.com/user-attachments/assets/66dbabb2-9059-4e69-801e-028ecf91d831)

## 5. Install Node.js
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```
![5](https://github.com/user-attachments/assets/03798df3-167f-4811-9485-53e9c56a8b52)

![6](https://github.com/user-attachments/assets/c97e168a-714b-455f-b012-14c7e79f6752)

## 6. Verify Node.js and npm Installation
```
node -v
npm -v
```
![7](https://github.com/user-attachments/assets/eb0f652e-3ec2-4945-8f59-b80776317702)

## 7. Install Git
```
sudo apt install git -y
```
![9](https://github.com/user-attachments/assets/47b55c7b-fdae-4273-9484-44f9d3d8ce2e)

### Verify the installation:

```
git -v
```
![10](https://github.com/user-attachments/assets/6156a993-2838-4bb5-b65e-ddc808881456)

## 8. Clone the Source Code
Clone the application repository:

```
git clone https://github.com/LalitJ-All-Info/To-Do-App-Task.git
```
![8](https://github.com/user-attachments/assets/9ad4ad67-f756-4a8c-81a4-62374c0134b2)

![11](https://github.com/user-attachments/assets/929c50e6-500c-4d22-bf0d-8fadf50ec4c7)



## 9. Navigate to the Source Code Directory

```
ls
cd
ls
```
![12](https://github.com/user-attachments/assets/a30b7506-3586-451f-b0d1-2d5080b18b75)


## 10. Install Dependencies
Install the required dependencies for the Node.js application:
```
npm install
```
![13](https://github.com/user-attachments/assets/b0e6b88d-d989-4de6-b19a-3ce01b86eb1b)

## 11. Install pm2
Install pm2 globally to manage the application:
```
npm install -g pm2
```
![14](https://github.com/user-attachments/assets/73fd854f-562e-43ea-9743-48eedf374e4b)

## 12. Start the Application in the Background
Use pm2 to run the application:
```
pm2 start app.js
```
![15](https://github.com/user-attachments/assets/ad45feaa-e6a9-4959-bed9-8dd55d202872)

## 13. Configure the Firewall
Open the required port (e.g., 3000) for your application:
![16](https://github.com/user-attachments/assets/a5c1858e-3571-47b3-b840-0802c20577b0)

![17](https://github.com/user-attachments/assets/bfcb10d8-9980-4652-822d-6b302206a240)

## 14. Verify Application Deployment
Access your application in the browser using the VM's public IP and port:
Eg: http://35.244.13.195:3000/
![18](https://github.com/user-attachments/assets/0cf88c63-c8ca-4043-b844-a60dde05ae45)
