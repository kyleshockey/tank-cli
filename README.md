# tank

> :floppy_disk: Share files without leaving your terminal.

[![NPM](https://nodei.co/npm/tank.png?global=true)](https://nodei.co/npm/tank/)

This is the CLI for Tank's file sharing service.

## Installation
0. install [npm](https://npmjs.com/) and `node >= 4.0` if you don't have them already.
1. `npm install -g tank`.

## Usage

#### Upload a file
    → tank ./dope_kickflips.mp4

```
Uploading 1 file...
Done.

dope_kickflips.mp4 is available at https://tank.sh/sCTgPj
Quick download: 'curl -L https://tank.sh/sCTgPj > dope_kickflips.mp4'
```

That's all there is to it!

#### Upload multiple files

You can upload multiple files at once as well. For example:

    → tank ./sweet_grinds.mp4 ./sick_ollies.wmv
    
```
Uploading 2 files...
Done.

sweet_grinds.mp4 is available at https://tank.sh/ah0fdw
Quick download: 'curl -L https://tank.sh/ah0fdw > sweet_grinds.mp4'

sick_ollies.wmv is available at https://tank.sh/46eQKy
Quick download: 'curl -L https://tank.sh/46eQKy > sick_ollies.wmv'
```

#### Downloading

If you're trying to download files with a CLI tool like `http`, `wget`, or `curl`- make sure your tool is set to follow `Location` header redirects. With curl, you can achieve this with an `-L` flag, which we give you an example of with every upload.

## Features

- Terminal tool friendly
- Fast: your files are served by S3
