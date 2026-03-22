# 이 프로젝트와 하네스

공통 규약·검증 스크립트는 저장소 **geumsagwa-harness**에 있습니다.

- GitHub: https://github.com/geumsagwa/geumsagwa-harness
- 로컬(형제 폴더): `../harness/` — 문서는 `../harness/docs/HARNESS.md`
- `tasks.json` 검증:

```powershell
cd ..\harness
.\scripts\validate.ps1 -TasksPath "..\homepage\tasks.json"
```

원격만 쓸 때: `geumsagwa-harness`를 클론해 `project`와 나란히 두거나, 템플릿만 복사해 사용합니다.
