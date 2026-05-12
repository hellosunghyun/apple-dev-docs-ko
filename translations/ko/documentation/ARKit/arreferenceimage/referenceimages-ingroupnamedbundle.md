---
source_path: "documentation/ARKit/arreferenceimage/referenceimages-ingroupnamedbundle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceimage/referenceimages-ingroupnamedbundle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:referenceimagesingroupnamedbundle:0000:0001">referenceImages(inGroupNamed:bundle:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:referenceimagesingroupnamedbundle:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:referenceimagesingroupnamedbundle:0002:0001">Xcode 프로젝트의 에셋 카탈로그에서 지정한 AR Resource Group의 모든 참조 이미지를 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:referenceimagesingroupnamedbundle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:referenceimagesingroupnamedbundle:0004:0001">iOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:referenceimagesingroupnamedbundle:0004:0002">iPadOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:referenceimagesingroupnamedbundle:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func referenceImages(inGroupNamed name: String, bundle: Bundle?) -> Set<ARReferenceImage>?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 그룹의 모든 고유 참조 이미지 집합입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">월드 트래킹 AR 세션에서 이미지 감지를 위해 이 세트를 세션 구성의 <a href="arworldtrackingconfiguration/detectionimages.md">@@TOKEN_0@@</a> 속성에 지정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>name</code>: Xcode 프로젝트의 기본 에셋 카탈로그에 있는 AR Resource Group의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>bundle</code>: 에셋 카탈로그 리소스를 로드할 번들, 또는 앱의 기본 번들을 사용하려면 <code>nil</code>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0014:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceimage/referenceimages(ingroupnamed:bundle:">View on Apple Developer</a>)*</span>
