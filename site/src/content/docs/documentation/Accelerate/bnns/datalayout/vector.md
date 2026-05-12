---
source_path: "documentation/Accelerate/bnns/datalayout/vector.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/datalayout/vector"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayoutvector:0000:0001">BNNS.DataLayout.vector</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutvector:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutvector:0002:0001">1D 벡터를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutvector:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutvector:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case vector
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/datalayout/matrixcolumnmajor.md">BNNS.DataLayout.matrixColumnMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">2D 열 우선(column-major) 행렬을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/datalayout/matrixrowmajor.md">BNNS.DataLayout.matrixRowMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">2D 행 우선(row-major) 행렬을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/datalayout/matrixfirstmajor.md">BNNS.DataLayout.matrixFirstMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">2D first-major 행렬을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/datalayout/matrixlastmajor.md">BNNS.DataLayout.matrixLastMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">2D last-major 행렬을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/datalayout/imagechw.md">BNNS.DataLayout.imageCHW</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">3D 이미지 스택을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/datalayout/tensor3dfirstmajor.md">BNNS.DataLayout.tensor3DFirstMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">임베딩 차원, 시퀀스 길이, 배치 크기 순으로 크기가 정렬된 3D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/datalayout/tensor3dlastmajor.md">BNNS.DataLayout.tensor3DLastMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">임베딩 차원, 배치 크기, 시퀀스 길이 순으로 크기가 정렬된 3D last-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/datalayout/tensor3dnse.md">BNNS.DataLayout.tensor3DNSE</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">컨볼루션 가중치 배열 4D를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/datalayout/tensor3dsne.md">BNNS.DataLayout.tensor3DSNE</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">4D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/datalayout/convolutionweightsoihw.md">BNNS.DataLayout.convolutionWeightsOIHW</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">4D last-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/datalayout/tensor4dfirstmajor.md">BNNS.DataLayout.tensor4DFirstMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">5D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/datalayout/tensor4dlastmajor.md">BNNS.DataLayout.tensor4DLastMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">5D last-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/datalayout/tensor5dfirstmajor.md">BNNS.DataLayout.tensor5DFirstMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnns/datalayout/tensor5dlastmajor.md">BNNS.DataLayout.tensor5DLastMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnns/datalayout/tensor6dfirstmajor.md">BNNS.DataLayout.tensor6DFirstMajor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/datalayout/vector">View on Apple Developer</a>*</span>
