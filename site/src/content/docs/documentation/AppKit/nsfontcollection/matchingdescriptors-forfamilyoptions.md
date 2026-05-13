---
source_path: "documentation/AppKit/nsfontcollection/matchingdescriptors-forfamilyoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsfontcollection/matchingdescriptors-forfamilyoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:matchingdescriptorsforfamilyoptions:0000:0001">matchingDescriptors(forFamily:options:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:matchingdescriptorsforfamilyoptions:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:matchingdescriptorsforfamilyoptions:0002:0001">Returns an array of font descriptors matching the logical descriptors for the given font family and options.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:matchingdescriptorsforfamilyoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:matchingdescriptorsforfamilyoptions:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func matchingDescriptors(forFamily family: String, options: [NSFontCollectionMatchingOptionKey : NSNumber]? = nil) -> [NSFontDescriptor]?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The <a href="nsfontcollection/matchingdescriptors.md">@@TOKEN_0@@</a> for the given family and options.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>family</code>: The font family whose descriptors are matched.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>options</code>: A dictionary containing any combination of the <code>Matching Descriptors Options</code> keys or <code>nil</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var matchingDescriptors: [NSFontDescriptor]?](nsfontcollection/matchingdescriptors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">An array of font descriptors matching the logical descriptors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func matchingDescriptors(forFamily: String) -&gt; [NSFontDescriptor]?](nsfontcollection/matchingdescriptors(forfamily:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns an array of font descriptors matching the logical descriptors for the given font family.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func matchingDescriptors(options: [NSFontCollectionMatchingOptionKey : NSNumber]?) -&gt; [NSFontDescriptor]?](nsfontcollection/matchingdescriptors(options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns an array of font descriptors matching the logical descriptors with the given options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsfontcollectionmatchingoptionkey.md">struct NSFontCollectionMatchingOptionKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">These constants are used by the <a href="nsfontcollection/matchingdescriptors(options:">@@TOKEN_0@@</a>.md) and <a href="nsfontcollection/matchingdescriptors(forfamily:options:">@@TOKEN_1@@</a>.md) options dictionary parameters.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var queryDescriptors: [NSFontDescriptor]?](nsfontcollection/querydescriptors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">구현할 GMRES의 정확한 변형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPSplitComplex, result: inout V)</a>-9x5jn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">구현할 GMRES의 정확한 변형을 정의합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정된 배정밀도 복소수 벡터의 각 원소에 대한 절대값을 계산합니다.</span>
