---
source_path: "documentation/AVFoundation/avmutableaudiomixinputparameters/setvolume-at.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/setvolume-at"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setvolumeat:0000:0001">setVolume(_:at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setvolumeat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setvolumeat:0002:0001">지정된 시간부터 오디오 볼륨 값을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setvolumeat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setvolumeat:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setVolume(_ volume: Float, at time: CMTime)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 <code>time</code>에서 시작되는 볼륨 램프를 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">나중에 다른 볼륨 레벨의 시작 시간을 지정하지 않는 한, 이 볼륨 설정은 트랙 끝까지 유지됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>volume</code>: 볼륨입니다. 값은 <code>0.0</code>에서 <code>1.0</code> 사이여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>time</code>: 볼륨을 설정할 시작 시간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutableaudiomixinputparameters/setvolumeramp(fromstartvolume:toendvolume:timerange:">func setVolumeRamp(fromStartVolume: Float, toEndVolume: Float, timeRange: CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 시간 범위에서 적용할 볼륨 램프를 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/setvolume(_:at:">View on Apple Developer</a>)*</span>
