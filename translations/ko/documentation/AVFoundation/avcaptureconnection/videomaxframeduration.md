---
source_path: "documentation/AVFoundation/avcaptureconnection/videomaxframeduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videomaxframeduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videomaxframeduration:0000:0001">videoMaxFrameDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videomaxframeduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videomaxframeduration:0002:0001">연속된 비디오 프레임 사이에 연결이 적용할 수 있는 최대 시간 간격입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videomaxframeduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videomaxframeduration:0004:0001">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videomaxframeduration:0004:0002">macOS 10.9+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var videoMaxFrameDuration: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Retrieve the underlying error from the notification’s user information dictionary using the key <a href="avcapturesessionerrorkey.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">See the <a href="avcapturedevice/isportraiteffectenabled.md">@@TOKEN_0@@</a> property of <a href="avcapturedevice.md">@@TOKEN_1@@</a> for more information.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This property only takes effect when <a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">@@TOKEN_0@@</a> is set to <code>true</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcaptureconnection/isvideominframedurationsupported.md">var isVideoMinFrameDurationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">연결이 최소 프레임 지속 시간을 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcaptureconnection/videominframeduration.md">var videoMinFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">연속된 비디오 프레임 사이에 연결이 적용할 수 있는 최소 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcaptureconnection/isvideomaxframedurationsupported.md">var isVideoMaxFrameDurationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">연결이 최대 프레임 지속 시간을 지원하는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videomaxframeduration">View on Apple Developer</a>*</span>
