---
source_path: "documentation/AVFoundation/avvideocompositionvalidationhandling/videocomposition-shouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition-shouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0000:0001">videoComposition(_:shouldContinueValidatingAfterFindingInvalidTrackIDIn:layerInstruction:asset:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0002:0001">비디오 컴포지션의 애니메이션에 사용된 트랙 ID와 일치하지 않거나 에셋의 트랙에 해당하지 않는 비디오 컴포지션 레이어 지시문을 보고합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocompositionshouldcontinuevalidatingafterfindinginvalidtrackidinlayerinstructionasset:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func videoComposition(_ videoComposition: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTrackIDIn videoCompositionInstruction: any AVVideoCompositionInstructionProtocol, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">비디오 컴포지션에서 추가 문제가 존재할 수 있으므로 검증을 계속 진행해야 하는 경우 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">에셋 트랙은 <a href="avvideocomposition/isvalid(for:timerange:validationdelegate:">@@TOKEN_0@@</a>.md) 메서드에서 지정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>videoComposition</code>: 검증 중인 비디오 컴포지션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>videoCompositionInstruction</code>: 비디오 컴포지션 지시문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>layerInstruction</code>: 레이어 지시문입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>asset</code>: 기본 에셋입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindinginvalidvalueforkey:">func videoComposition(AVVideoComposition, shouldContinueValidatingAfterFindingInvalidValueForKey: String) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">잘못된 값을 가진 키를 보고합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindingemptytimerange:">func videoComposition(AVVideoComposition, shouldContinueValidatingAfterFindingEmptyTimeRange: CMTimeRange) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">해당하는 비디오 컴포지션 지시문이 없는 시간 범위를 보고합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindinginvalidtimerangein:">func videoComposition(AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTimeRangeIn: any AVVideoCompositionInstructionProtocol) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">시간 범위가 잘못된 비디오 컴포지션 지시문을 보고합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindinginvalidtrackidin:layerinstruction:asset:">View on Apple Developer</a>)*</span>
