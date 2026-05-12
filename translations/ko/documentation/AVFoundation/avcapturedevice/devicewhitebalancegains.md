---
source_path: "documentation/AVFoundation/avcapturedevice/devicewhitebalancegains.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:devicewhitebalancegains:0000:0001">deviceWhiteBalanceGains</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegains:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegains:0002:0001">현재 사용 중인 장치별 RGB 화이트 밸런스 게인 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegains:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegains:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegains:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegains:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegains:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var deviceWhiteBalanceGains: AVCaptureDevice.WhiteBalanceGains { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 화이트 밸런스에 사용되는 현재 빨간색, 녹색, 파란색 게인 값을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If you require specifying capture settings not covered by a capture session preset, you can set the <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> property to any of the formats in this array.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">각 채널은 1.0에서 <a href="avcapturedevice/maxwhitebalancegain.md">@@TOKEN_0@@</a> 사이의 값을 지원합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 key-value 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/grayworlddevicewhitebalancegains.md">var grayWorldDeviceWhiteBalanceGains: AVCaptureDevice.WhiteBalanceGains</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">중립 회색 화이트 포인트에 필요한 현재 장치별 화이트 밸런스 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/maxwhitebalancegain.md">var maxWhiteBalanceGain: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">색상 채널을 설정할 수 있는 최대 지원 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains">View on Apple Developer</a>*</span>
