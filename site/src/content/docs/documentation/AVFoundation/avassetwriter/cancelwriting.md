---
source_path: "documentation/AVFoundation/avassetwriter/cancelwriting.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/cancelwriting"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cancelwriting:0000:0001">cancelWriting()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelwriting:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelwriting:0002:0001">출력 파일 생성 작업을 취소합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelwriting:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancelwriting:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cancelWriting()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This method causes the receiver to resume writing captured samples to the current output file returned by <a href="avcapturefileoutput/outputfileurl.md">@@TOKEN_0@@</a>, after recording was previously paused using <a href="avcapturefileoutput/pauserecording(">@@TOKEN_1@@</a>.md).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그렇지 않으면 이 메서드를 호출해 호출 스레드가 에셋 라이터가 쓰기 세션 취소를 완료할 때까지 블록됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">에셋 라이터가 쓰기 과정에서 출력 파일을 생성한 경우 이 메서드를 호출하면 해당 파일이 삭제됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetwriter/start.md">func start() throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">작성기가 출력 파일에 미디어 데이터를 쓰도록 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriter/startwriting.md">func startWriting() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">라이터에 출력 쓰기를 시작하라고 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetwriter/startsession(atsourcetime:">func startSession(atSourceTime: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">에셋 쓰기 세션을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetwriter/endsession(atsourcetime:">func endSession(atSourceTime: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">에셋 쓰기 세션을 종료합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetwriter/finishwriting(completionhandler:">func finishWriting(completionHandler: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">미완료 입력을 모두 완료로 표시하고 출력 파일 쓰기를 완료합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avassetwriter/finishwriting.md">func finishWriting() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">출력 파일 쓰기를 완료합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/cancelwriting(">View on Apple Developer</a>)*</span>
