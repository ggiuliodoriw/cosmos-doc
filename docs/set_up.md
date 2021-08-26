# Installation

## Workdir setup

> Install Android Studio, Android Sdk and GIT

:exclamation:  IMPORTANTE!
> **Create folder "webee" and clone repository https://github.com/webeeuniverse/BossAndroidApp.git**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
$ mkdir webee
</div>    
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
$ cd webee
</div>    
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
~/webee$ git clone https://github.com/webeeuniverse/BossAndroidApp.git
</div>    

> **Clone Ashrae Algorithm and Webee CLI in the webee folder**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
~/webee$ git clone https://github.com/webeeuniverse/ashraeAlgorithm.git
</div>    
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
~/webee$ git clone https://github.com/webeeuniverse/WebeeCLIJava.git
</div>    

> **Create folder to save the key provided by the repository administrator**
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #3c763d; background-color: #dff0d8; border-color: #d6e9c6;">
~/webee$ mkdir keys
</div>    

![tree](./../assets/imagenes/tree.png)

### For production environments...

| :memo:        | Make a master-gen3-cosmos branch chekout and compile the application with the build type "release". Automatically, Webee CLI will switch to the "prod" branch. Your application will be created successfully, pointing to the right environment. Great!       |
|---------------|:------------------------|

### Working in git branchs

***Main branches of work:***

<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
    - master-gen3-cosmos (Production) 
</div>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
    - uat-g3-cosmos (User Acceptance Testing) 
</div>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
    - qa-g3-cosmos (Quality Assurance) 
</div>
<div style="padding: 15px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
    - dev-g4-cosmos (Development)
</div>

| :warning: WARNING          |
|:---------------------------|
| For the development of each new feature, a new branch must be created from dev-g4-cosmos. The format is as follows dev-g4-cosmos-PIC-100 The master-gen3-cosmos and uat-gen3-cosmos branches can only be modified through a hotfix branch.      |

### Plugins
    Cosmos Hub uses the following tools for its operation

    Plugin	README
    Webee CLI	https://github.com/webeeuniverse/WebeeCLIJava
    ASHRAE Algorithm	https://github.com/webeeuniverse/ashraeAlgorithm
    Firebase	https://firebase.google.com
    Socket IO	https://socket.io/
    Pushy	https://pushy.me/
    Eclipse Paho	https://www.eclipse.org/paho/clients/java/


----------------------------------------------------------------------------------------------------------------------------------------------

## IDE setup (Android Studio)

### Requisitos
- JAVA 1.8
![java](./../assets/imagenes/java_version.png)

- GRADLE 5.6.4
![gradle](./../assets/imagenes/gradle_version.png)
--------------------------------------------------
![gradle](./../assets/imagenes/gradle_version2.png)

- ANDROID SDK API LEVEL 24 y 25 (recomendado: del 24 al 29)
![android](./../assets/imagenes/android_sdk.png)


