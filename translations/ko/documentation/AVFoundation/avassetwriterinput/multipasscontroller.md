---
source_path: "documentation/AVFoundation/avassetwriterinput/multipasscontroller.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/multipasscontroller"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetwriterinputmultipasscontroller:0000:0001">AVAssetWriterInput.MultiPassController</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmultipasscontroller:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmultipasscontroller:0002:0001">다중 패스가 지원되는 경우 writer input receiver가 비동기 pass description 시퀀스를 수신할 수 있는 인터페이스를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetwriterinputmultipasscontroller:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetwriterinputmultipasscontroller:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class MultiPassController
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-pass-descriptions:0008:0001">패스 설명 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-pass-descriptions:0009:0001"><a href="avassetwriterinput/multipasscontroller/passdescriptions.md">var passDescriptions: (some AsyncSequence&lt;AVAssetWriterInputPassDescription, Never&gt;)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-pass-descriptions:0010:0001">다중 패스가 지원되는 경우 반복할 수 있는 pass description의 비동기 시퀀스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:accessing-pass-descriptions:0010:0002">다중 패스가 지원되지 않으면 이 속성은 nil입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriterinput/canperformmultiplepasses.md">var canPerformMultiplePasses: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력이 추가된 미디어 데이터에 대해 여러 번 패스를 수행할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/currentpassdescription.md">var currentPassDescription: AVAssetWriterInputPassDescription?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 패스의 요구사항을 설명하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetwriterinputpassdescription.md">class AVAssetWriterInputPassDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 패스의 요구사항을 조회할 수 있는 인터페이스를 정의하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetwriterinput/markcurrentpassasfinished.md">func markCurrentPassAsFinished()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력에서 추가된 미디어를 분석해 특정 세그먼트를 재인코딩하여 결과 개선 가능성을 판별하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetwriterinput/performsmultipassencodingifsupported.md">var performsMultiPassEncodingIfSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">입력이 소스 미디어 데이터를 여러 번 패스로 인코딩하려고 시도하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriterinput/respondtoeachpassdescription(on:using:">func respondToEachPassDescription(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력이 새 패스를 시작할 때마다 콜백을 호출하도록 지시합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/multipasscontroller">View on Apple Developer</a>*</span>
