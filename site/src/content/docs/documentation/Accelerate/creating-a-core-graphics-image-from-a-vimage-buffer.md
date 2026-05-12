---
source_path: "documentation/Accelerate/creating-a-core-graphics-image-from-a-vimage-buffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/creating-a-core-graphics-image-from-a-vimage-buffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:creating-a-core-graphics-image-from-a-vimage-buffer:0000:0001">vImage 버퍼에서 Core Graphics 이미지 만들기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-core-graphics-image-from-a-vimage-buffer:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-core-graphics-image-from-a-vimage-buffer:0002:0001">vImage 버퍼의 표시 가능한 표현을 생성합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">vImage는 vImage 버퍼에서 Core Graphics 이미지를 생성하는 함수를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">이 함수는 vImage 작업 결과를 사용자에게 표시할 수 있게 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:create-the-image:0005:0001">이미지 생성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-image:0006:0001">버퍼에서 Core Graphics 이미지를 생성한 다음, 해당 이미지로 <a href="https://developer.apple.com/documentation/UIKit/UIImage">@@TOKEN_0@@</a> 인스턴스를 초기화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:create-the-image:0006:0002">The <a href="vimage_buffer/createcgimage(format:flags:">@@TOKEN_0@@</a>.md) function returns a <a href="https://developer.apple.com/documentation/CoreGraphics/CGImage">@@TOKEN_1@@</a> instance based on the supplied Core Graphics image format (for more information, see <a href="converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md">@@TOKEN_2@@</a>).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:create-the-image:0007:0001">다음 예제는 vImage 버퍼에서 Core Graphics 이미지를 생성하는 방법을 보여줍니다.</span>

```swift
let result = try? destinationBuffer.createCGImage(format: format)

if let result = result {
    // Assumes `imageView` is a `UIImageView`
    imageView.image = UIImage(cgImage: result)
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md">Core Graphics 이미지와 vImage 버퍼 간 비트맵 데이터 변환</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Core Graphics와 vImage 간에 이미지 데이터를 전달하여 이미지를 생성하고 조작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="creating-and-populating-buffers-from-core-graphics-images.md">Core Graphics 이미지에서 버퍼 생성 및 채우기</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Core Graphics 이미지에서 vImage 버퍼를 초기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="building-a-basic-image-processing-workflow.md">기본 이미지 처리 워크플로우 구축</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">vImage로 이미지를 크기 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="applying-geometric-transforms-to-images.md">이미지에 기하학적 변환 적용</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">vImage를 사용해 이미지 버퍼를 반사, 전단, 회전 및 스케일링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="compositing-images-with-alpha-blending.md">알파 블렌딩으로 이미지 합성</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">알파 블렌딩을 사용해 두 이미지를 결합해 하나의 출력을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="compositing-images-with-vimage-blend-modes.md">vImage 블렌드 모드로 이미지 합성</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">블렌드 모드를 사용해 두 이미지를 결환해 하나의 출력을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="applying-vimage-operations-to-regions-of-interest.md">Applying vImage operations to regions of interest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Limit the effect of vImage operations to rectangular regions of interest.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="optimizing-image-processing-performance.md">Optimizing image-processing performance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Improve your app’s performance by converting image buffer formats from interleaved to planar.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimage-library.md">vImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Manipulate large images using the CPU’s vector processor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/creating-a-core-graphics-image-from-a-vimage-buffer">View on Apple Developer</a>*</span>
