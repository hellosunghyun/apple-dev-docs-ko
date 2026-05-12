---
source_path: "documentation/AVKit/avexperiencecontroller/experience-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:experience:0000:0001">experience</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experience:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experience:0002:0001">현재 experience입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:experience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:experience:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
final var experience: AVExperienceController.Experience { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템은 <a href="avexperiencecontroller/transitioncontext/status-swift.property.md">@@TOKEN_0@@</a>가 <a href="avexperiencecontroller/transitioncontext/status-swift.enum/finished(result:">@@TOKEN_1@@</a>.md)로 변경된 후에만 이 값을 업데이트합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 값의 변경 사항을 관찰하려면 <a href="avexperiencecontroller/delegate-swift.protocol/experiencecontroller(_:didchangetransitioncontext:">@@TOKEN_0@@</a>.md) 대리자 메서드를 구현합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avexperiencecontroller/allowedexperiences.md">var allowedExperiences: AVExperienceController.Experiences</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">애플리케이션에서 지원하는 experience 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avexperiencecontroller/availableexperiences.md">var availableExperiences: AVExperienceController.Experiences</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 기기에서 사용할 수 있는 허용 experience입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avexperiencecontroller/experiences.md">AVExperienceController.Experiences</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">experience 컨트롤러에서 사용할 experience 모음을 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avexperiencecontroller/experience-swift.enum.md">AVExperienceController.Experience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">시스템에서 지원하는 experience 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avexperiencecontroller/configuration-swift.property.md">var configuration: AVExperienceController.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">experience별 구성 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avexperiencecontroller/configuration-swift.struct.md">AVExperienceController.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">experience별 구성을 저장하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swift.property">View on Apple Developer</a>*</span>
