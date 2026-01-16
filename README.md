

## Deployment Guide (Mongolian)

**1-р шат: Кодоо бэлдэх (Local Windows машин дээр)**

VS Code эсвэл Terminal дээр:

1. **Тохиргоо шинэчлэх**: `next.config.ts` дотор `output: "standalone"` байгаа эсэхийг шалгаарай.
2. **Build хийх**: `npm run build` команд ажиллуулна.
3. **Файлуудаа эмхлэх**: Автоматаар `deploy` хавтас үүсгэхийн тулд дараах командыг ажиллуулна:
   ```bash
   npm run deploy:prepare
   ```
   Энэ команд нь `deploy` хавтас үүсгэж, шаардлагатай файлуудыг хуулаад, **`deploy.zip`** файл үүсгэнэ.

**2-р шат: Файлуудыг сервер рүү хуулах**

Windows ашиглаж байгаа тул WinSCP (үнэгүй GUI хэрэгсэл) эсвэл PowerShell дээр `scp` ашиглах нь хамгийн хялбар арга юм.

**PowerShell ашиглан:**

```powershell
# Үүнийг өөрийн local Windows terminal дээр ажиллуулна
scp deploy.zip ubuntu@YOUR_SERVER_IP:/home/ubuntu/
```

Сервер дээрээ очоод:
```bash
unzip deploy.zip
# эсвэл unzip байхгүй бол: sudo apt install unzip
mv deploy myapp
```

*(Сервер дээрээ `/home/ubuntu/myapp` хавтас байгаа эсэхийг эхлээд шалгаарай: `mkdir -p /home/ubuntu/myapp`)*
