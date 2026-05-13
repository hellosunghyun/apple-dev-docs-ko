---
source_path: "documentation/AVFoundation/avcapturevideoorientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideoorientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturevideoorientation:0000:0001">AVCaptureVideoOrientation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturevideoorientation:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturevideoorientation:0002:0001">비디오 방향을 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturevideoorientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturevideoorientation:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturevideoorientation:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturevideoorientation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturevideoorientation:0004:0004">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVCaptureVideoOrientation
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이러한 상수는 <a href="avcapturevideopreviewlayer.md">@@TOKEN_0@@</a> 출력을 가진 연결의 <a href="avcaptureconnection/videoorientation.md">@@TOKEN_1@@</a>에 설정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0010:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0011:0001"><a href="avcapturevideoorientation/portrait.md">AVCaptureVideoOrientation.portrait</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0012:0001">비디오를 세로 방향으로 지정하며 위쪽이 위로 오도록 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0013:0001"><a href="avcapturevideoorientation/portraitupsidedown.md">AVCaptureVideoOrientation.portraitUpsideDown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0014:0001">비디오를 세로 방향으로 지정하며 위쪽이 아래로 오도록 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0015:0001"><a href="avcapturevideoorientation/landscaperight.md">AVCaptureVideoOrientation.landscapeRight</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0016:0001">비디오를 가로 방향으로 지정하며 위쪽이 왼쪽으로 오도록 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0017:0001"><a href="avcapturevideoorientation/landscapeleft.md">AVCaptureVideoOrientation.landscapeLeft</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0018:0001">비디오를 가로 방향으로 지정하며 위쪽이 오른쪽으로 오도록 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0019:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0020:0001"><a href="avcapturevideoorientation/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcaptureconnection/isvideostabilizationenabled.md">var isVideoStabilizationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">연결에서 비디오 안정화가 활성화되어 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcaptureconnection/enablesvideostabilizationwhenavailable.md">var enablesVideoStabilizationWhenAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">시스템이 사용 가능한 경우 비디오 안정화를 활성화하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcaptureconnection/isvideoorientationsupported.md">var isVideoOrientationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">연결이 비디오 방향 변경을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcaptureconnection/videoorientation.md">var videoOrientation: AVCaptureVideoOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">연결을 통과하는 비디오를 회전할 방향을 지정하는 방향 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideoorientation">View on Apple Developer</a>*</span>
