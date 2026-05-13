---
source_path: "documentation/Accelerate/vimage_argbtoypcbcrmatrix/init-r-ypg-ypb-ypr-cbg-cbb-cb-r-crg-crb-cr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage_argbtoypcbcrmatrix/init-r-ypg-ypb-ypr-cbg-cbb-cb-r-crg-crb-cr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initrypgypbyprcbgcbbcbrcrgcrbcr:0000:0001">init(R_Yp:G_Yp:B_Yp:R_Cb:G_Cb:B_Cb_R_Cr:G_Cr:B_Cr:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initrypgypbyprcbgcbbcbrcrgcrbcr:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initrypgypbyprcbgcbbcbrcrgcrbcr:0002:0001">Creates a 3 x 3 matrix for converting RGB to Y’CbCr.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initrypgypbyprcbgcbbcbrcrgcrbcr:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initrypgypbyprcbgcbbcbrcrgcrbcr:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(R_Yp: Float, G_Yp: Float, B_Yp: Float, R_Cb: Float, G_Cb: Float, B_Cb_R_Cr: Float, G_Cr: Float, B_Cr: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">프레임워크는 콘텐츠 제안이 표시되는 동안 이 속성 값을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/cd4c896355cac49fedbe25a83dcb644c/media-2941901%402x.png">None</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>R_Yp</code>: The *R_Yp* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>G_Yp</code>: The *G_Yp* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>B_Yp</code>: The *B_Yp* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>R_Cb</code>: The *R_Cb* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>G_Cb</code>: The *G_Cb* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>B_Cb_R_Cr</code>: The *B_Cb_R_Cr* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>G_Cr</code>: The *G_Cr* in the conversion matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>B_Cr</code>: The *B_Cr* in the conversion matrix.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="vimage_argbtoypcbcrmatrix/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Creates a 3 x 3 zero matrix for converting RGB to Y’CbCr.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">사용자가 콘텐츠를 빠르게 탐색할 수 있도록 챕터 마커를 추가합니다.</span>
