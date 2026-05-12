---
source_path: "documentation/AVFoundation/avvideocompressionpropertieskey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompressionpropertieskey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideocompressionpropertieskey:0000:0001">AVVideoCompressionPropertiesKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompressionpropertieskey:0001:0001">**Framework**: AVFoundation **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompressionpropertieskey:0002:0001">비디오 자산의 압축 속성 딕셔너리에 접근하는 키입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompressionpropertieskey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompressionpropertieskey:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVVideoCompressionPropertiesKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The system updates this value only after the <a href="avexperiencecontroller/transitioncontext/status-swift.property.md">@@TOKEN_0@@</a> changes to <a href="avexperiencecontroller/transitioncontext/status-swift.enum/finished(result:">@@TOKEN_1@@</a>.md).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 딕셔너리에 항목을 추가해 비트 전송률, B-frame 전달, I-frame 간격, 코덱 품질을 수동으로 변경할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">현재 릴리스 및 구성에서 지원되는 키는 <a href="avcapturemoviefileoutput/supportedoutputsettingskeys(for:">@@TOKEN_0@@</a>.md) 메서드를 조회하면 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideodecompressionpropertieskey.md">let AVVideoDecompressionPropertiesKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비디오 디코더에 전달할 비디오 디컴프레션 속성을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideoaveragebitratekey.md">let AVVideoAverageBitRateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비디오 압축에 사용되는 초당 비트 수(average bit rate)에 접근하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideoqualitykey.md">let AVVideoQualityKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오의 JPEG 압축 품질을 설정하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideomaxkeyframeintervalkey.md">let AVVideoMaxKeyFrameIntervalKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">키프레임 간 최대 간격에 접근하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideomaxkeyframeintervaldurationkey.md">let AVVideoMaxKeyFrameIntervalDurationKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">키프레임 간 최대 간격 지속 시간에 접근하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideoallowframereorderingkey.md">let AVVideoAllowFrameReorderingKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">프레임 재정렬 권한에 접근하는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideoappleprorawbitdepthkey.md">let AVVideoAppleProRAWBitDepthKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Apple ProRAW 비트 깊이에 접근하는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompressionpropertieskey">View on Apple Developer</a>*</span>
