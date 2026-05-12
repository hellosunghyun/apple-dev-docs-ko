---
source_path: "documentation/ARKit/imagetrackingprovider/init-referenceimages.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/imagetrackingprovider/init-referenceimages"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initreferenceimages:0000:0001">init(referenceImages:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceimages:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceimages:0002:0001">제공한 참조 이미지를 추적하는 이미지 추적 provider를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferenceimages:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initreferenceimages:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(referenceImages: [ReferenceImage])
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>referenceImages</code>: 주변 환경에서 추적할 알려진 이미지의 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="planedetectionprovider/allanchors.md">static var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 런타임 환경에서 이미지 추적 provider를 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](imagetrackingprovider/requiredauthorizations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이미지 추적에 필요한 권한 부여 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/imagetrackingprovider/init(referenceimages:">Apple Developer에서 보기</a>)*</span>
