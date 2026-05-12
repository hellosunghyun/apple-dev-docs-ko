---
source_path: "documentation/AVFoundation/avcapturedevice/temperatureandtintvalues-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/temperatureandtintvalues-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:temperatureandtintvaluesfor:0000:0001">temperatureAndTintValues(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:temperatureandtintvaluesfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:temperatureandtintvaluesfor:0002:0001">Converts device-specific white balance RGB gain values to device-independent temperature and tint values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:temperatureandtintvaluesfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:temperatureandtintvaluesfor:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:temperatureandtintvaluesfor:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:temperatureandtintvaluesfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:temperatureandtintvaluesfor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func temperatureAndTintValues(for whiteBalanceGains: AVCaptureDevice.WhiteBalanceGains) -> AVCaptureDevice.WhiteBalanceTemperatureAndTintValues
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A structure that contains device-independent values.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Each change in the structure supports values between <code>1.0</code> and <a href="avcapturedevice/maxwhitebalancegain.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">This method throws an exception if you specify an unsupported value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>whiteBalanceGains</code>: The white balance gain values. You can’t specify a value of <a href="avcapturedevice/currentwhitebalancegains.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/chromaticityvalues(for:">func chromaticityValues(for: AVCaptureDevice.WhiteBalanceGains) -&gt; AVCaptureDevice.WhiteBalanceChromaticityValues</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Converts device-specific white balance RGB gain values to device-independent chromaticity values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/devicewhitebalancegains(for:">func deviceWhiteBalanceGains(for: AVCaptureDevice.WhiteBalanceChromaticityValues) -&gt; AVCaptureDevice.WhiteBalanceGains</a>-9gdtw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Converts device-independent chromaticity values to device-specific white balance RGB gain values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/devicewhitebalancegains(for:">func deviceWhiteBalanceGains(for: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues) -&gt; AVCaptureDevice.WhiteBalanceGains</a>-3wtsa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Converts device-independent temperature and tint values to device-specific white balance RGB gain values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/whitebalancegains.md">AVCaptureDevice.WhiteBalanceGains</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A structure that defines RGB white balance gain values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturedevice/whitebalancechromaticityvalues.md">AVCaptureDevice.WhiteBalanceChromaticityValues</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A structure that defines CIE 1931 xy chromaticity values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturedevice/whitebalancetemperatureandtintvalues.md">AVCaptureDevice.WhiteBalanceTemperatureAndTintValues</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A structure that defines temperature and tint values correlated to a white-balance color.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/temperatureandtintvalues(for:">View on Apple Developer</a>)*</span>
