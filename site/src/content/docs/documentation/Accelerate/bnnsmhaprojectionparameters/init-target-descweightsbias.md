---
source_path: "documentation/Accelerate/bnnsmhaprojectionparameters/init-target-descweightsbias.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsmhaprojectionparameters/init-target-descweightsbias"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittargetdescweightsbias:0000:0001">init(target_desc:weights:bias:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittargetdescweightsbias:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittargetdescweightsbias:0002:0001">지정된 파라미터에서 새로운 멀티헤드 어텐션 프로젝션 파라미터 구조체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittargetdescweightsbias:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:inittargetdescweightsbias:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(target_desc: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor, bias: BNNSNDArrayDescriptor)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>target_desc</code>: 연산의 주요 대상(입력 query, key, value 또는 출력) 중 하나에 대한 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>weights</code>: 초기 projection의 가중치 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>bias</code>: 초기 projection의 bias 디스크립터입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsmhaprojectionparameters/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">새로운 다중 헤드 attention projection 매개변수 구조체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsmhaprojectionparameters/init(target_desc:weights:bias:">Apple Developer에서 보기</a>)*</span>
