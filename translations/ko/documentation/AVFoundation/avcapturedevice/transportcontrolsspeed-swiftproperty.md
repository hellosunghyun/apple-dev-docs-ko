---
source_path: "documentation/AVFoundation/avcapturedevice/transportcontrolsspeed-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolsspeed-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transportcontrolsspeed:0000:0001">transportControlsSpeed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportcontrolsspeed:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportcontrolsspeed:0002:0001">The current playback speed.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportcontrolsspeed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transportcontrolsspeed:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var transportControlsSpeed: AVCaptureDevice.TransportControlsSpeed { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">For devices that support transport control, the value of this property indicates the current playback speed of the deck.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The following table gives examples of the meaning of values:</span>

| <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0001">Value</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0002">Meaning</span> |
| --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0003">0.0</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0004">Stopped</span> |
| <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0005">1.0</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0006">Forward at normal speed.</span> |
| <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0007">-1.0</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0008">Reverse at normal speed.</span> |
| <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0009">2.0</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0009:0010">Forward at 2x normal speed.</span> |

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This property is key-value observable.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/transportcontrolssupported.md">var transportControlsSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether the device supports transport control commands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/transportcontrolsplaybackmode-swift.property.md">var transportControlsPlaybackMode: AVCaptureDevice.TransportControlsPlaybackMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The current playback mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/settransportcontrolsplaybackmode(_:speed:">func setTransportControlsPlaybackMode(AVCaptureDevice.TransportControlsPlaybackMode, speed: AVCaptureDevice.TransportControlsSpeed)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Sets the transport control’s playback mode and speed.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/transportcontrolsplaybackmode-swift.enum.md">AVCaptureDevice.TransportControlsPlaybackMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Constants that indicate the transport control’s current mode of playback, if it has one.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/transportcontrolsspeed-swift.typealias.md">AVCaptureDevice.TransportControlsSpeed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 오류는 구성에 모호하거나 잘못된 데이터가 포함되어 있음을 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolsspeed-swift.property">View on Apple Developer</a>*</span>
