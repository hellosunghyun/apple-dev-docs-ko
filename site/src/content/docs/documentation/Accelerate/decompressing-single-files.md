---
source_path: "documentation/Accelerate/decompressing-single-files.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/decompressing-single-files"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:decompressing-single-files:0000:0001">단일 파일 압축 해제</span>

<span class="ko-segment" data-segment-id="seg:paragraph:decompressing-single-files:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:decompressing-single-files:0002:0001">압축 파일에서 단일 파일을 재생성합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">이 문서에서는 AppleArchive를 사용하여 이전에 압축된 파일을 압축 해제하고, 압축 해제된 데이터를 파일에 쓰는 방법을 알아봅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">아래 코드는 <a href="compressing-single-files.md">@@TOKEN_0@@</a>에서 설명된 단계를 사용해 생성된 파일을 압축 해제합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-file-stream-to-read-the-source-archive:0006:0001">원본 아카이브를 읽기 위한 파일 스트림 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-file-stream-to-read-the-source-archive:0007:0001"><a href="https://developer.apple.com/documentation/AppleArchive/ArchiveByteStream">@@TOKEN_0@@</a> 클래스는 다양한 기능에 대한 스트림을 생성하는 정적 팩토리 메서드를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-file-stream-to-read-the-source-archive:0007:0002">이 경우 소스 파일을 읽는 바이트 스트림을 생성하려면 <a href="https://developer.apple.com/documentation/AppleArchive/ArchiveByteStream/fileStream(path:mode:options:permissions:">@@TOKEN_0@@</a>)를 사용합니다.</span>

```swift
let archiveFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf.lzfse")

guard let readFileStream = ArchiveByteStream.fileStream(
        path: archiveFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? readFileStream.close()
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-file-stream-to-write-the-decompressed-file:0009:0001">압축 해제된 파일을 쓰기 위한 파일 스트림 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-file-stream-to-write-the-decompressed-file:0010:0001">You also use <a href="https://developer.apple.com/documentation/AppleArchive/ArchiveByteStream/fileStream(path:mode:options:permissions:">@@TOKEN_0@@</a>) to create the file stream that writes the decompressed file to the file system.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-file-stream-to-write-the-decompressed-file:0010:0002">이 경우 <a href="https://developer.apple.com/documentation/System/FileDescriptor/AccessMode/writeOnly">@@TOKEN_0@@</a> 모드를 사용합니다.</span>

```swift
let destinationFilePath = FilePath(NSTemporaryDirectory() + "myFile_decompressed.pdf")

guard let writeFileStream = ArchiveByteStream.fileStream(
        path: destinationFilePath,
        mode: .writeOnly,
        options: [ .create ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? writeFileStream.close()
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-decompression-stream:0012:0001">압축 해제 스트림 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-decompression-stream:0013:0001">압축 해제 스트림을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-decompression-stream:0013:0002">압축 데이터를 제공하는 입력 스트림으로 파일 읽기 스트림을 지정합니다.</span>

```swift
guard let decompressStream = ArchiveByteStream.decompressionStream(readingFrom: readFileStream) else {
    print("unable to create compress stream")
    return
}
defer {
    try? decompressStream.close()
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:decompress-the-source-archive:0015:0001">원본 아카이브 압축 해제</span>

<span class="ko-segment" data-segment-id="seg:paragraph:decompress-the-source-archive:0016:0001">마지막으로 <a href="https://developer.apple.com/documentation/AppleArchive/ArchiveByteStream/process(readingFrom:writingTo:">@@TOKEN_0@@</a>)를 호출하여 압축 해제 스트림의 출력을 파일 쓰기 스트림에 기록합니다.</span>

```swift
do {
    _ = try ArchiveByteStream.process(readingFrom: decompressStream,
                                      writingTo: writeFileStream)
} catch {
    print("Handle `ArchiveByteStream.process` failed.")
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:decompress-the-source-archive:0018:0001">반환되면 <code>myFile_decompressed.pdf</code>가 <a href="https://developer.apple.com/documentation/Foundation/NSTemporaryDirectory(">@@TOKEN_1@@</a>)에 존재하며 <code>myFile.pdf.lzfse</code>의 압축 해제된 내용을 포함합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="compressing-single-files.md">Compressing single files</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">단일 파일을 압축하고 결과를 파일 시스템에 저장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="compressing-file-system-directories.md">Compressing file system directories</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">전체 디렉터리의 내용을 압축하고 결과를 파일 시스템에 저장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="decompressing-and-extracting-an-archived-directory.md">Decompressing and extracting an archived directory</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">아카이브 파일에서 전체 파일 시스템 디렉터리를 다시 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="compressing-and-saving-a-string-to-the-file-system.md">Compressing and saving a string to the file system</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">유니코드 문자열의 내용을 압축하고 결과를 파일 시스템에 저장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="decompressing-and-parsing-an-archived-string.md">Decompressing and parsing an archived string</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">아카이브 파일에서 문자열을 재생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/decompressing-single-files">View on Apple Developer</a>*</span>
