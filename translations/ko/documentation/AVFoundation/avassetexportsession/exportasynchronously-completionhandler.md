---
source_path: "documentation/AVFoundation/avassetexportsession/exportasynchronously-completionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/exportasynchronously-completionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:exportasynchronouslycompletionhandler:0000:0001">exportAsynchronously(completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:exportasynchronouslycompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:exportasynchronouslycompletionhandler:0002:0001">Starts the asynchronous execution of an export session.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:exportasynchronouslycompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:exportasynchronouslycompletionhandler:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func export() async
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>handler</code>: A callback the system invokes when it finishes successfully, or in the event of writing failure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetexportsession/export(to:as:isolation:">func export(to: URL, as: AVFileType, isolation: isolated (any Actor)?) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산을 지정된 파일 형식으로 출력 위치에 내보냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetexportsession/cancelexport.md">func cancelExport()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">내보내기 세션 실행을 취소합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/exportasynchronously(completionhandler:">View on Apple Developer</a>)*</span>
