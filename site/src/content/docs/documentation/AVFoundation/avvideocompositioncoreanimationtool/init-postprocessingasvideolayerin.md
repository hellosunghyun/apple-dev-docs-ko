---
source_path: "documentation/AVFoundation/avvideocompositioncoreanimationtool/init-postprocessingasvideolayerin.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init-postprocessingasvideolayerin"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initpostprocessingasvideolayerin:0000:0001">init(postProcessingAsVideoLayer:in:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpostprocessingasvideolayerin:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpostprocessingasvideolayerin:0002:0001">합성된 비디오 프레임을 Core Animation 레이어와 합성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpostprocessingasvideolayerin:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initpostprocessingasvideolayerin:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(postProcessingAsVideoLayer videoLayer: CALayer, in animationLayer: CALayer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">구성용 새 애니메이션 도구입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">합성된 비디오 프레임을 <code>videoLayer</code>에 배치하고 <code>animationLayer</code>를 렌더링하여 최종 프레임을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><code>videoLayer</code>는 <code>animationLayer</code> 하위 레이어 트리에 있어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><code>animationLayer</code>는 다른 레이어 트리에서 가져오거나 다른 레이어 트리에 추가된 상태여서는 안 됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>videoLayer</code>: 비디오 레이어입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>animationLayer</code>: 애니메이션 레이어입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avvideocompositioncoreanimationtool/init(additionallayer:astrackid:">convenience init(additionalLayer: sending CALayer, asTrackID: CMPersistentTrackID)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">비디오 구성에 Core Animation 레이어를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[convenience init(postProcessingAsVideoLayers: [CALayer], in: CALayer)](avvideocompositioncoreanimationtool/init(postprocessingasvideolayers:in:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">합성된 비디오 프레임을 Core Animation 레이어와 합성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avvideocompositioncoreanimationtool/init(configuration:">convenience init(configuration: sending AVVideoCompositionCoreAnimationTool.Configuration)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">합성된 비디오 프레임을 Core Animation 레이어와 합성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avvideocompositioncoreanimationtool/configuration.md">AVVideoCompositionCoreAnimationTool.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">새 AVVideoCompositionCoreAnimationTool 인스턴스를 초기화하기 위한 구성 가능한 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(postprocessingasvideolayer:in:">View on Apple Developer</a>)*</span>
