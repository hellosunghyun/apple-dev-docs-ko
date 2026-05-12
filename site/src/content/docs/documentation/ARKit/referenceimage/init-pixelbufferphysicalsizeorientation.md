---
source_path: "documentation/ARKit/referenceimage/init-pixelbufferphysicalsizeorientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/referenceimage/init-pixelbufferphysicalsizeorientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initpixelbufferphysicalsizeorientation:0000:0001">init(pixelBuffer:physicalSize:orientation:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpixelbufferphysicalsizeorientation:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpixelbufferphysicalsizeorientation:0002:0001">추적 중에 참조로 사용할 이미지를 pixel buffer에서 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initpixelbufferphysicalsizeorientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initpixelbufferphysicalsizeorientation:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(pixelBuffer: CVPixelBuffer, physicalSize: CGSize, orientation: CGImagePropertyOrientation = .up)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>pixelBuffer</code>: 추적 중에 참조로 사용할 이미지입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>physicalSize</code>: 미터 단위의 이미지 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>orientation</code>: 이미지 자산의 방향입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="referenceimage/init(cgimage:physicalsize:orientation:">init(cgimage: CGImage, physicalSize: CGSize, orientation: CGImagePropertyOrientation)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Core Graphics 이미지에서 참조 이미지를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func loadReferenceImages(inGroupNamed: String, bundle: Bundle?) -&gt; [ReferenceImage]](referenceimage/loadreferenceimages(ingroupnamed:bundle:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋 카탈로그에서 그룹 이름을 기준으로 여러 참조 이미지를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/referenceimage/init(pixelbuffer:physicalsize:orientation:">View on Apple Developer</a>)*</span>
