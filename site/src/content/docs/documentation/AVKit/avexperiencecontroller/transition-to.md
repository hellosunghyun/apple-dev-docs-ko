---
source_path: "documentation/AVKit/avexperiencecontroller/transition-to.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avexperiencecontroller/transition-to"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transitionto:0000:0001">transition(to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitionto:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitionto:0002:0001">동영상을 다른 경험으로 전환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transitionto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transitionto:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@discardableResult
@MainActor final func transition(to toExperience: AVExperienceController.Experience) async -> AVExperienceController.TransitionContext.TransitionResult
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">전환 결과입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Call this method to transition to a different experience such as <a href="avexperiencecontroller/experience-swift.enum/expanded.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">전환을 시작하면 시스템이 경험 컨트롤러의 delegate 메서드를 호출하므로 앱에서 경험 변경에 대응할 수 있습니다. 전환의 성공 여부는 이 메서드가 반환하는 <a href="avexperiencecontroller/transitioncontext/transitionresult.md">@@TOKEN_0@@</a>를 평가하여 판단합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 메서드가 반환하는 <a href="avexperiencecontroller/transitioncontext/transitionresult.md">@@TOKEN_0@@</a>를 평가하여 전환의 성공 여부를 판단합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">전환 결과가 <a href="avexperiencecontroller/transitioncontext/transitionresult/completed.md">@@TOKEN_0@@</a>인 경우 전환이 성공한 것입니다. 이때 시스템은 <a href="avexperiencecontroller/experience-swift.property.md">@@TOKEN_1@@</a> 속성을 새 경험으로 업데이트합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">전환 결과가 <a href="avexperiencecontroller/transitioncontext/transitionresult/reversed(reason:">@@TOKEN_0@@</a>.md)인 경우 전환이 실패한 것입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">전환 실패 원인을 확인하려면 결과의 <a href="avexperiencecontroller/transitioncontext/reversedreason.md">@@TOKEN_0@@</a>를 평가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0005">전환이 시작되기 전에 실패가 발생하면 시스템이 delegate 콜백 메서드를 호출하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0006"><a href="avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:preparefortransitionusing:">@@TOKEN_0@@</a>.md) 콜백이 실행된 후에 실패가 발생하면 전환 컨텍스트가 <a href="avexperiencecontroller/transitioncontext/status-swift.enum/finished(result:">@@TOKEN_1@@</a>.md)로 변경됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>toExperience</code>: 전환할 대상 경험입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">*<a href="https://developer.apple.com/documentation/avkit/avexperiencecontroller/transition(to:">Apple Developer에서 보기</a>)*</span>
