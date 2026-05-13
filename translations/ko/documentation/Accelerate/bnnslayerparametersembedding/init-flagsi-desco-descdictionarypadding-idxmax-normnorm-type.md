---
source_path: "documentation/Accelerate/bnnslayerparametersembedding/init-flagsi-desco-descdictionarypadding-idxmax-normnorm-type.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersembedding/init-flagsi-desco-descdictionarypadding-idxmax-normnorm-type"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0000:0001">init(flags:i_desc:o_desc:dictionary:padding_idx:max_norm:norm_type:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0002:0001">지정된 매개변수에서 새 임베딩 레이어 매개변수 구조체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initflagsidescodescdictionarypaddingidxmaxnormnormtype:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(flags: BNNSEmbeddingFlags, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, dictionary: BNNSNDArrayDescriptor, padding_idx: Int, max_norm: Float, norm_type: Float)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>flags</code>: 추가 동작(예: 빈도에 따라 그래디언트를 스케일링하는 동작)을 지정하는 비트 필드입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>i_desc</code>: 입력의 부호 있는 정수 또는 부호 없는 정수 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>o_desc</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>dictionary</code>: 딕셔너리의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>padding_idx</code>: 패딩 인덱스입니다. 연산은 패딩 인덱스에 해당하는 인덱스를 가진 딕셔너리 항목에 대해 영 텐서를 반환합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>max_norm</code>: 최대 노름입니다. 0이 아니면, 순방향 조회 시 노름이 <code>max_norm</code>보다 큰 벡터를 재정규화합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>norm_type</code>: 노름 유형입니다. <code>max_norm</code>이 0이 아니면 이 값은 <code>p = norm_type</code>인 p-노름을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersembedding/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">새 임베딩 레이어 매개변수 구조체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersembedding/init(flags:i_desc:o_desc:dictionary:padding_idx:max_norm:norm_type:">View on Apple Developer</a>)*</span>
