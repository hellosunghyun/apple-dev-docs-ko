---
source_path: "documentation/AVFoundation/avmutablevideocompositionlayerinstruction/settransformramp-fromstarttoendtimerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransformramp-fromstarttoendtimerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:settransformrampfromstarttoendtimerange:0000:0001">setTransformRamp(fromStart:toEnd:timeRange:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:settransformrampfromstarttoendtimerange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:settransformrampfromstarttoendtimerange:0002:0001">지정된 시간 범위 동안 적용할 transform 램프를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:settransformrampfromstarttoendtimerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:settransformrampfromstarttoendtimerange:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setTransformRamp(fromStart startTransform: CGAffineTransform, toEnd endTransform: CGAffineTransform, timeRange: CMTimeRange)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This method plays the available media data at the specified <code>rate</code> regardless of whether there is sufficient media buffered to ensure smooth playback.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If media data exists in the playback buffer, calling this method changes the player’s playback rate to the specified <code>rate</code> and its <a href="avplayer/timecontrolstatus-swift.property.md">@@TOKEN_1@@</a> to a value of <a href="avplayer/timecontrolstatus-swift.enum/playing.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>rate</code>: The specified playback rate.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>endTransform</code>: <code>timeRange</code>의 종료 시점에 적용할 transform입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>timeRange</code>: transform 값이 <code>startTransform</code>과 <code>endTransform</code> 사이에서 보간되는 시간 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocompositionlayerinstruction/setopacity(_:at:">func setOpacity(Float, at: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지시의 시간 범위 내 특정 시점에 불투명도 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablevideocompositionlayerinstruction/setopacityramp(fromstartopacity:toendopacity:timerange:">func setOpacityRamp(fromStartOpacity: Float, toEndOpacity: Float, timeRange: CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 시간 범위 동안 적용할 불투명도 램프를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablevideocompositionlayerinstruction/settransform(_:at:">func setTransform(CGAffineTransform, at: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지시의 시간 범위 내에서 특정 시점의 transform 값을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablevideocompositionlayerinstruction/settransformramp(fromstart:toend:timerange:">View on Apple Developer</a>)*</span>
