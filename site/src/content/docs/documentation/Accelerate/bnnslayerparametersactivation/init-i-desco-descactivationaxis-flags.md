---
source_path: "documentation/Accelerate/bnnslayerparametersactivation/init-i-desco-descactivationaxis-flags.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersactivation/init-i-desco-descactivationaxis-flags"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initidescodescactivationaxisflags:0000:0001">init(i_desc:o_desc:activation:axis_flags:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidescodescactivationaxisflags:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidescodescactivationaxisflags:0002:0001">제공된 디스크립터, 활성화 함수 및 axis flags로부터 새 activation layer 매개변수 구조체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidescodescactivationaxisflags:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidescodescactivationaxisflags:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, activation: BNNSActivation, axis_flags: UInt32)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **중요**: 입력 차원은 출력 차원과 같아야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">identity가 아닌 활성화 유형의 경우 입력과 출력은 <code>float</code>여야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>i_desc</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>o_desc</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>activation</code>: 레이어가 출력에 적용하는 활성화 함수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>axis_flags</code>: 레이어가 특정 활성화 함수를 적용할 축을 지정하는 플래그입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersactivation/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">새로운 활성화 레이어 매개변수 구조체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersactivation/init(i_desc:o_desc:activation:axis_flags:">Apple Developer에서 보기</a>)*</span>
