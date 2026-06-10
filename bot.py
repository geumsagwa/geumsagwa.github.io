import os
import discord
import subprocess # 깃 명령어 실행을 위해 추가
from discord.ext import commands
from dotenv import load_dotenv
from google import genai

# ... (기존 설정 코드 동일) ...

@bot.command()
@commands.is_owner()
async def pull(ctx):
    """깃허브에서 최신 코드를 가져옵니다."""
    try:
        await ctx.send("🔄 깃허브에서 최신 코드를 불러오는 중...")
        # 깃 pull 실행
        result = subprocess.run(["git", "pull"], capture_output=True, text=True)
        if result.returncode == 0:
            await ctx.send(f"✅ 업데이트 성공!\n
http://googleusercontent.com/immersive_entry_chip/0

---

### 💡 깃허브 연동을 위한 체크리스트

1.  **Git 초기화:** 프로젝트 폴더(`C:\Users\pass6\project\Discord`)에서 터미널을 열고 아래 명령어를 입력하세요.
    * `git init`
    * `git remote add origin [사용자님의_깃허브_레포지토리_주소]`
2.  **첫 커밋:** * `git add .`
    * `git commit -m "Initial commit"`
    * `git push -u origin main`

이제 디스코드에서 코드를 붙여넣느라 고생할 필요 없습니다! 

**궁금한 점:** 지금 프로젝트 폴더에 `git`이 설정되어 있나요? 아니면 깃허브 레포지토리 만드는 것부터 제가 도와드릴까요? 이것만 설정되면, 이제 **"Gemini, `!summary` 로직을 개선한 코드를 알려줘"**라고 하시면 제가 코드를 드리고, 사용자님은 그냥 `git push` 후 봇에게 `!pull`만 치면 끝납니다!