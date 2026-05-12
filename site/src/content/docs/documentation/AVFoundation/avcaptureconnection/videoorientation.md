---
source_path: "documentation/AVFoundation/avcaptureconnection/videoorientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videoorientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videoorientation:0000:0001">videoOrientation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videoorientation:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videoorientation:0002:0001">연결을 통해 전달되는 비디오를 회전하는 방식을 지정하는 방향입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videoorientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videoorientation:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videoorientation:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videoorientation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videoorientation:0004:0004">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var videoOrientation: AVCaptureVideoOrientation { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="setting-up-a-capture-session.md">Setting up a capture session</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 비디오 연결에만 적용됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="avcaptureconnection/isvideoorientationsupported.md">@@TOKEN_0@@</a> 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>인 경우 <code>videoOrientation</code>을 설정하여 연결 출력에서 사용되는 비디오 버퍼를 회전시킬 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><code>videoOrientation</code>을 설정해도 비디오 버퍼가 실제로 회전한다는 보장은 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">예를 들어, <a href="avcapturemoviefileoutput.md">@@TOKEN_0@@</a> 개체에 대한 비디오 연결은 QuickTime 트랙 매트릭스를 사용해 방향을 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004"><a href="avcapturestillimageoutput.md">@@TOKEN_0@@</a> 개체의 비디오 연결은 EXIF 태그를 사용해 방향을 처리합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><a href="avcapturevideodataoutput.md">@@TOKEN_0@@</a> 클라이언트는 <a href="avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">@@TOKEN_1@@</a>.md) 델리게이트 콜백에서 실제로 회전된 픽셀 버퍼를 받을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002"><code>AVCaptureVideoDataOutput</code>는 하드웨어 가속으로 회전 작업을 수행하며 모든 네 가지 <a href="avcapturevideoorientation.md">@@TOKEN_1@@</a> 모드를 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0003">클라이언트는 비디오 데이터 출력의 비디오 <a href="avcaptureconnection.md">@@TOKEN_0@@</a>에서 <code>videoOrientation</code> 또는 <a href="avcaptureconnection/isvideomirrored.md">@@TOKEN_2@@</a>를 설정하여 실제 버퍼 회전을 요청할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">❗ **중요**: 버퍼를 실제로 회전하면 성능 비용이 발생하므로 필요한 경우에만 회전을 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0002"><a href="avassetwriter.md">@@TOKEN_0@@</a>를 사용해 회전된 비디오를 영화 파일로 쓰려면 대신 <a href="avassetwriterinput.md">@@TOKEN_1@@</a>의 <a href="avassetwriterinput/transform.md">@@TOKEN_2@@</a> 속성을 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcaptureconnection/isvideostabilizationenabled.md">var isVideoStabilizationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">연결에서 비디오 안정화가 활성화되어 있는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcaptureconnection/enablesvideostabilizationwhenavailable.md">var enablesVideoStabilizationWhenAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">시스템에서 사용 가능한 경우 비디오 안정화를 활성화하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcaptureconnection/isvideoorientationsupported.md">var isVideoOrientationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">연결이 비디오 방향 변경을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturevideoorientation.md">enum AVCaptureVideoOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">비디오 방향을 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videoorientation">View on Apple Developer</a>*</span>
