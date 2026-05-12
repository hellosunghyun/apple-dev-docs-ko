---
source_path: "documentation/AVFoundation/avvideocompositioncoreanimationtool/init-additionallayerastrackid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init-additionallayerastrackid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initadditionallayerastrackid:0000:0001">init(additionalLayer:asTrackID:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initadditionallayerastrackid:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initadditionallayerastrackid:0002:0001">비디오 컴포지션에 Core Animation 레이어를 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initadditionallayerastrackid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initadditionallayerastrackid:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(additionalLayer layer: sending CALayer, asTrackID trackID: CMPersistentTrackID)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">해당 레이어에 대한 새 Core Animation 도구입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 비디오 컴포지션에서 Core Animation 레이어를 개별 트랙 입력으로 포함할 때 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">비디오 컴포지션 지침에서 렌더링된 애니메이션이 포함될 위치의 <code>trackID</code>를 참조해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>layer</code>: 추가할 Core Animation 레이어입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>trackID</code>: 트랙을 식별하는 트랙 ID입니다. <code>trackID</code>는 원본의 실제 trackID와 일치해서는 안 됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avvideocompositioncoreanimationtool/init(postprocessingasvideolayer:in:">convenience init(postProcessingAsVideoLayer: CALayer, in: CALayer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">합성된 비디오 프레임을 Core Animation 레이어와 함께 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[convenience init(postProcessingAsVideoLayers: [CALayer], in: CALayer)](avvideocompositioncoreanimationtool/init(postprocessingasvideolayers:in:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">합성된 비디오 프레임들을 Core Animation 레이어와 함께 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avvideocompositioncoreanimationtool/init(configuration:">convenience init(configuration: sending AVVideoCompositionCoreAnimationTool.Configuration)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">합성된 비디오 프레임을 Core Animation 레이어와 함께 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avvideocompositioncoreanimationtool/configuration.md">AVVideoCompositionCoreAnimationTool.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">새 AVVideoCompositionCoreAnimationTool 인스턴스를 초기화할 때 구성 가능한 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/init(additionallayer:astrackid:">Apple Developer 문서 보기</a>)*</span>
