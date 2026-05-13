---
source_path: "documentation/AddressBook/abtypeofproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbook/abtypeofproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:abtypeofproperty:0000:0001">ABTypeOfProperty(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abtypeofproperty:0001:0001">**Framework**: Address Book **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abtypeofproperty:0002:0001">Returns the type of a given property for a given record.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abtypeofproperty:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:abtypeofproperty:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func ABTypeOfProperty(_ addressBook: ABAddressBookRef!, _ recordType: CFString!, _ property: CFString!) -> ABPropertyType
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The type of <code>property</code> as defined in <a href="abpropertytype.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">If <code>property</code> does not exist in <code>recordType</code>, this function returns <a href="kaberrorinproperty.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>addressBook</code>: The address book for the logged-in user.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>recordType</code>: The record type that contains <code>property</code>: kABGroupRecordType or kABPersonRecordType.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>property</code>: The property whose type you wish to obtain.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/norm/euclidean.md">static var euclidean: BNNS.Norm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/norm/l2.md">BNNS.LossFunction.huber(huberDelta:)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns an array containing the names of all the properties for the specified record type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/norm/linfinity.md">static var lInfinity: BNNS.Norm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns the localized version of a built in property,label, or key.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsfilterdestroy(_:">func BNNSFilterDestroy(BNNSFilter?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns the localized version of a built in property, label, or key.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="abremoveproperties(_:_:_:">func ABRemoveProperties(ABAddressBookRef!, CFString!, CFArray!) -&gt; CFIndex</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/addressbook/abtypeofproperty(_:_:_:">View on Apple Developer</a>)*</span>
