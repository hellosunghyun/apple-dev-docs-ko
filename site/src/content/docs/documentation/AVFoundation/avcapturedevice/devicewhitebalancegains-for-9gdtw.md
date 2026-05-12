---
source_path: "documentation/AVFoundation/avcapturedevice/devicewhitebalancegains-for-9gdtw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains-for-9gdtw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:devicewhitebalancegainsfor:0000:0001">deviceWhiteBalanceGains(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegainsfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegainsfor:0002:0001">디바이스 독립적인 크로마틱성 값을 디바이스별 화이트 밸런스 RGB 게인 값으로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:devicewhitebalancegainsfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegainsfor:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegainsfor:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegainsfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:devicewhitebalancegainsfor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func deviceWhiteBalanceGains(for chromaticityValues: AVCaptureDevice.WhiteBalanceChromaticityValues) -> AVCaptureDevice.WhiteBalanceGains
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">디바이스별 RGB 게인 값을 포함하는 구조체입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 화이트 밸런스에 사용되는 현재 빨간색, 초록색, 파란색 게인 값을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 값을 사용하여 특정 장면의 색상 캐스트를 조정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">각 채널은 <code>1.0</code>에서 -<a href="avcapturedevice/maxwhitebalancegain.md">@@TOKEN_1@@</a>까지의 값을 지원합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 속성은 키-값 관찰 가능한 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>chromaticityValues</code>: 화이트 밸런스 RGB 게인 값을 얻기 위한 크로마틱성 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/chromaticityvalues(for:">func chromaticityValues(for: AVCaptureDevice.WhiteBalanceGains) -&gt; AVCaptureDevice.WhiteBalanceChromaticityValues</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">디바이스별 화이트 밸런스 RGB 게인 값을 디바이스 독립적인 크로마틱성 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/temperatureandtintvalues(for:">func temperatureAndTintValues(for: AVCaptureDevice.WhiteBalanceGains) -&gt; AVCaptureDevice.WhiteBalanceTemperatureAndTintValues</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">디바이스별 화이트 밸런스 RGB 게인 값을 디바이스 독립적인 온도 및 틴트 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/devicewhitebalancegains(for:">func deviceWhiteBalanceGains(for: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues) -&gt; AVCaptureDevice.WhiteBalanceGains</a>-3wtsa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">디바이스 독립적인 온도 및 틴트 값을 디바이스별 화이트 밸런스 RGB 게인 값으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturedevice/whitebalancegains.md">AVCaptureDevice.WhiteBalanceGains</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">RGB 화이트 밸런스 게인 값들을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturedevice/whitebalancechromaticityvalues.md">AVCaptureDevice.WhiteBalanceChromaticityValues</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">CIE 1931 xy 색도 값을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturedevice/whitebalancetemperatureandtintvalues.md">AVCaptureDevice.WhiteBalanceTemperatureAndTintValues</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">화이트 밸런스 색상과 연관된 온도 및 틴트 값을 정의하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicewhitebalancegains(for:">View on Apple Developer</a>-9gdtw)*</span>
