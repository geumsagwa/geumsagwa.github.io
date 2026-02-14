import http.server
import mimetypes

# epub MIME 타입 등록
mimetypes.add_type('application/epub+zip', '.epub')

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({
    '.epub': 'application/epub+zip',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ttf': 'font/ttf',
})

server = http.server.HTTPServer(('0.0.0.0', 5500), handler)
print('서버 실행 중: http://localhost:5500')
server.serve_forever()
