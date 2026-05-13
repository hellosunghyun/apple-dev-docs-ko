---
source_path: "documentation/AppKit/nslayoutconstraint/constant.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nslayoutconstraint/constant"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:constant:0000:0001">constant</span>

<span class="ko-segment" data-segment-id="seg:paragraph:constant:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:constant:0002:0001">The constant added to the multiplied second attribute participating in the constraint.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:constant:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:constant:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var constant: CGFloat { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Unlike the other properties, the constant can be modified after constraint creation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Setting the constant on an existing constraint performs much better than removing the constraint and adding a new one that’s exactly like the old except that it has a different constant.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nslayoutconstraint/firstitem.md">var firstItem: AnyObject?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The first object participating in the constraint.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nslayoutconstraint/firstattribute.md">var firstAttribute: NSLayoutConstraint.Attribute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The attribute of the first object participating in the constraint.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nslayoutconstraint/relation-swift.property.md">var relation: NSLayoutConstraint.Relation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The relation between the two attributes in the constraint.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nslayoutconstraint/seconditem.md">var secondItem: AnyObject?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The second object participating in the constraint.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nslayoutconstraint/secondattribute.md">var secondAttribute: NSLayoutConstraint.Attribute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">제약 조건에 참여하는 두 번째 개체의 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nslayoutconstraint/multiplier.md">var multiplier: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">제약 조건에 참여하는 두 번째 속성에 적용되는 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nslayoutconstraint/firstanchor.md">var firstAnchor: NSLayoutAnchor&lt;AnyObject&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">제약 조건을 정의하는 첫 번째 앵커입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nslayoutconstraint/secondanchor.md">var secondAnchor: NSLayoutAnchor&lt;AnyObject&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">제약 조건을 정의하는 두 번째 앵커입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/appkit/nslayoutconstraint/constant">View on Apple Developer</a>*</span>
