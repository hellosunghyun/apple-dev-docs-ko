---
source_path: "documentation/ARKit/referenceimage/loadreferenceimages-ingroupnamedbundle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/referenceimage/loadreferenceimages-ingroupnamedbundle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadreferenceimagesingroupnamedbundle:0000:0001">loadReferenceImages(inGroupNamed:bundle:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadreferenceimagesingroupnamedbundle:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadreferenceimagesingroupnamedbundle:0002:0001">에셋 카탈로그의 그룹 이름을 사용해 여러 참조 이미지를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadreferenceimagesingroupnamedbundle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadreferenceimagesingroupnamedbundle:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func loadReferenceImages(inGroupNamed groupName: String, bundle: Bundle? = nil) -> [ReferenceImage]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 그룹에서 로드한 참조 이미지 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>groupName</code>: 에셋 카탈로그에서 에셋 그룹의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>bundle</code>: 이미지 에셋을 포함하는 번들입니다. <code>nil</code>이면 이 메서드는 기본 번들에서 참조 이미지를 로드합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="referenceimage/init(cgimage:physicalsize:orientation:">init(cgimage: CGImage, physicalSize: CGSize, orientation: CGImagePropertyOrientation)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Core Graphics 이미지에서 참조 이미지를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="referenceimage/init(pixelbuffer:physicalsize:orientation:">init(pixelBuffer: CVPixelBuffer, physicalSize: CGSize, orientation: CGImagePropertyOrientation)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">픽셀 버퍼에서 참조 이미지를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/referenceimage/loadreferenceimages(ingroupnamed:bundle:">Apple Developer에서 보기</a>)*</span>
