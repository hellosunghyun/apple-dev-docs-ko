---
source_path: "documentation/AVFoundation/avsamplecursordependencyinfo/init-sampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursordependencyinfo/init-sampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0000:0001">init(sampleIndicatesWhetherItHasDependentSamples:sampleHasDependentSamples:sampleIndicatesWhetherItDependsOnOthers:sampleDependsOnOthers:sampleIndicatesWhetherItHasRedundantCoding:sampleHasRedundantCoding:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0002:0001">샘플 정보가 포함된 샘플 커서 종속성 정보 구조체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initsampleindicateswhetherithasdependentsamplessamplehasdependentsamplessampleindicateswhetheritdependsonotherssampledependsonotherssampleindicateswhetherithasredundantcodingsamplehasredundantcoding:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(sampleIndicatesWhetherItHasDependentSamples: ObjCBool, sampleHasDependentSamples: ObjCBool, sampleIndicatesWhetherItDependsOnOthers: ObjCBool, sampleDependsOnOthers: ObjCBool, sampleIndicatesWhetherItHasRedundantCoding: ObjCBool, sampleHasRedundantCoding: ObjCBool)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>sampleIndicatesWhetherItHasDependentSamples</code>: 샘플이 다른 샘플에 의존하는지를 나타내는지 여부를 결정하는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>sampleHasDependentSamples</code>: 샘플에 종속 샘플이 있는지 여부를 결정하는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>sampleIndicatesWhetherItDependsOnOthers</code>: 샘플이 다른 샘플에 의존함을 나타내는지 여부를 결정하는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>sampleDependsOnOthers</code>: 샘플이 다른 샘플에 의존하는지 여부를 결정하는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>sampleIndicatesWhetherItHasRedundantCoding</code>: 샘플이 중복 코딩을 가지고 있는지 여부를 나타내는지 결정하는 Boolean 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>sampleHasRedundantCoding</code>: 샘플에 중복 코딩이 있는지 여부를 결정하는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursordependencyinfo/init(sampleindicateswhetherithasdependentsamples:samplehasdependentsamples:sampleindicateswhetheritdependsonothers:sampledependsonothers:sampleindicateswhetherithasredundantcoding:samplehasredundantcoding:">View on Apple Developer</a>)*</span>
