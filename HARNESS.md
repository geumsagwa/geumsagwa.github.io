# 이 프로젝트와 하네스

공통 규약·검증 스크립트는 **형제 저장소**에 있습니다.

- 경로: `../harness/` (로컬 클론 시)
- 문서: `../harness/docs/HARNESS.md`
- `tasks.json` 검증:

```powershell
cd ..\harness
.\scripts\validate.ps1 -TasksPath "..\homepage\tasks.json"
```

GitHub에만 올린 경우: 하네스 저장소를 클론해 같은 상위 폴더에 두거나, 템플릿만 복사해 사용합니다.
