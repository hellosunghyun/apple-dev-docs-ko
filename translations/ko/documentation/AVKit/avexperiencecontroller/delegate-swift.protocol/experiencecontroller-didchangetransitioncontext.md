---
source_path: "documentation/AVKit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller-didchangetransitioncontext.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller-didchangetransitioncontext"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:experiencecontrollerdidchangetransitioncontext:0000:0001">experienceController(_:didChangeTransitionContext:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experiencecontrollerdidchangetransitioncontext:0001:0001">**프레임워크**: AVKit **종류**: 메서드 **필수**: 예</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experiencecontrollerdidchangetransitioncontext:0002:0001">전환이 진행되는 동안 전환 컨텍스트가 바뀌면 대리자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experiencecontrollerdidchangetransitioncontext:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:experiencecontrollerdidchangetransitioncontext:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
func experienceController(_ controller: AVExperienceController, didChangeTransitionContext context: AVExperienceController.TransitionContext)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">경험 간 전환을 추적하려면 이 메서드를 구현합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>controller</code>: 경험 컨트롤러입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>context</code>: 전환에 대한 정보를 포함하는 구조체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangeavailableexperiences:">func experienceController(AVExperienceController, didChangeAvailableExperiences: AVExperienceController.Experiences)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사용 가능한 경험이 변경될 때 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:preparefortransitionusing:">func experienceController(AVExperienceController, prepareForTransitionUsing: AVExperienceController.TransitionContext) async</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 전환을 준비 중임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avexperiencecontroller/transitioncontext.md">AVExperienceController.TransitionContext</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">전환 상태가 대리자 객체에 제공됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangetransitioncontext:">View on Apple Developer</a>)*</span>
