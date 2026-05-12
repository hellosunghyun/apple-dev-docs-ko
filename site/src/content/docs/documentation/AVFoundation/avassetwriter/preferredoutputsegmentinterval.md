---
source_path: "documentation/AVFoundation/avassetwriter/preferredoutputsegmentinterval.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriter/preferredoutputsegmentinterval"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredoutputsegmentinterval:0000:0001">preferredOutputSegmentInterval</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredoutputsegmentinterval:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredoutputsegmentinterval:0002:0001">원하는 출력 세그먼트의 간격입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredoutputsegmentinterval:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredoutputsegmentinterval:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredOutputSegmentInterval: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureStillImageOutput</code> emits images with the same dimensions as its source <a href="avcapturedevice.md">@@TOKEN_1@@</a> instance’s <code>activeFormat.formatDescription</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">However, if you set this property to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, the receiver emits still images at the capture device’s <a href="avcapturedevice/format/highresolutionstillimagedimensions.md">@@TOKEN_1@@</a> value.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">값이 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/indefinite">@@TOKEN_0@@</a>일 때 <a href="avassetwriter/flushsegment(">@@TOKEN_1@@</a>.md)를 호출하면 세그먼트 데이터가 출력됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값은 쓰기가 시작된 후에는 변경할 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetwriter/delegate.md">var delegate: (any AVAssetWriterDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">에셋 작성 이벤트에 응답하는 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriterdelegate.md">protocol AVAssetWriterDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">에셋 작성 이벤트에 대응하기 위해 구현해야 하는 메서드를 정의하는 delegate 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetwriter/initialsegmentstarttime.md">var initialSegmentStartTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">초기 세그먼트의 시작 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetwriter/outputfiletypeprofile.md">var outputFileTypeProfile: AVFileTypeProfile?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">출력 파일 형식에 대한 프로필입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetwriter/flushsegment.md">func flushSegment()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">현재 세그먼트를 닫고 delegate 메서드로 출력합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/preferredoutputsegmentinterval">View on Apple Developer</a>*</span>
