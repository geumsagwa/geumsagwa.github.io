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

## v1 게이트 (이 저장소)

형제 폴더에 `harness`가 있을 때, 홈페이지 품질 검사:

```powershell
cd ..\harness
.\scripts\gate-website.ps1
```

전체(구조 + 홈페이지 + openclaw): `.\scripts\gate-all.ps1` — README는 **geumsagwa-harness** 참고.
