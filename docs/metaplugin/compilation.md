---
title: How to compile Unreal Engine for Linux
sidebar_label: Compilation
---

## Compiling the project

1. Install the crosscompiler for UE
2. Compile the engine under Linux
3. If there is no compiled engine, then add the `source` folder to the project
   (sometimes due to its absence, the project refuses to build under Linux)
4. Add any empty class if it was not there, and the project was on blueprints
5. Next, we compile the project for win in editor mode, run it, set a couple of settings and compile under Linux.

## Packing the project

Zip the compiled project folder.
When unpacking the archive, the structure should look something like this:

```
YOUR_ZIP_FOLDER_NAME/

    - LinuxNoEditor/
        - CarConfigurator/
        - CarConfigurator.sh
        - Engine/
        - Manifest_NonUFSFiles_Linux.txt
        - Samples/
```

Upload the ZIP archive to Google Drive and give us a public link like this:

`https://drive.google.com/file/d/1a-mavgG199Sqq0C0oKalgZwT0sI_E/view?usp=sharing`

### Profit!

---

## Steps:

### Step 1
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/1.png)

### Step 2
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/2.png)

### Step 3
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/3.png)

### Step 4
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/4.png)

### Step 5
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/5.png)

### Step 6
![Compilation Unreal Engine for Pixel Streaming ](/assets/compiling_steps/6.png)
