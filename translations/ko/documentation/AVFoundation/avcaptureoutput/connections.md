---
source_path: "documentation/AVFoundation/avcaptureoutput/connections.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureoutput/connections"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:connections:0000:0001">connections</span>

<span class="ko-segment" data-segment-id="seg:paragraph:connections:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:connections:0002:0001">캡처 출력 객체의 연결입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:connections:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:connections:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:connections:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:connections:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:connections:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:connections:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var connections: [AVCaptureConnection] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">배열의 각 연결 객체는 출력과 캡처 입력 포트 간의 매핑을 설명합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureoutput/connection(with:">func connection(with: AVMediaType) -&gt; AVCaptureConnection?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 미디어 유형의 입력 포트를 가진 첫 번째 연결을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureoutput/datadroppedreason.md">AVCaptureOutput.DataDroppedReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 프레임을 드롭한 이유를 정의하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureoutput/connections">View on Apple Developer</a>*</span>
