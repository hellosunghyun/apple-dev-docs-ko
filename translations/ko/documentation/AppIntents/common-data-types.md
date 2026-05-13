---
source_path: "documentation/AppIntents/common-data-types.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/common-data-types"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:common-data-types:0000:0001">Common data types</span>

<span class="ko-segment" data-segment-id="seg:paragraph:common-data-types:0001:0001">**Framework**: App Intents</span>

<span class="ko-segment" data-segment-id="seg:paragraph:common-data-types:0002:0001">Specify common types that your app supports, including currencies, files, and contacts.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">Use these types to manage specific types of data when you create a parameter for an app intent or a property for an app entity.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0005:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:contacts:0006:0001">Contacts</span>

- <span class="ko-segment" data-segment-id="seg:list:contacts:0007:0001"><a href="intentperson.md">struct IntentPerson</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:contacts:0008:0001">Information that identifies a person participating in an intents-based interaction.</span>

### <span class="ko-segment" data-segment-id="seg:heading:files:0009:0001">Files</span>

- <span class="ko-segment" data-segment-id="seg:list:files:0010:0001"><a href="intentfile.md">struct IntentFile</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:files:0011:0001">An interface for providing an app entity that represents an on-disk file or file-based resource.</span>

### <span class="ko-segment" data-segment-id="seg:heading:monetary-types:0012:0001">Monetary types</span>

- <span class="ko-segment" data-segment-id="seg:list:monetary-types:0013:0001"><a href="intentcurrencyamount.md">struct IntentCurrencyAmount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monetary-types:0014:0001">An amount of money to transfer during a financial transaction.</span>

- <span class="ko-segment" data-segment-id="seg:list:monetary-types:0015:0001"><a href="intentpaymentmethod.md">struct IntentPaymentMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monetary-types:0016:0001">Information about a form of payment supported by your app.</span>

### <span class="ko-segment" data-segment-id="seg:heading:items-and-collections:0017:0001">Items and collections</span>

- <span class="ko-segment" data-segment-id="seg:list:items-and-collections:0018:0001"><a href="intentitem.md">struct IntentItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:items-and-collections:0019:0001">A type describing a value returned from a dynamic options provider, plus information about how to display it to users.</span>

- <span class="ko-segment" data-segment-id="seg:list:items-and-collections:0020:0001"><a href="intentitemcollection.md">struct IntentItemCollection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:items-and-collections:0021:0001">Return this object to provide an advanced list of options, optionally divided in sections.</span>

- <span class="ko-segment" data-segment-id="seg:list:items-and-collections:0022:0001"><a href="intentitemsection.md">struct IntentItemSection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:items-and-collections:0023:0001">An object you use to divide dynamic options into sections.</span>

- <span class="ko-segment" data-segment-id="seg:list:items-and-collections:0024:0001"><a href="intentcollectionsize.md">struct IntentCollectionSize</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="adding-parameters-to-an-app-intent.md">Adding parameters to an app intent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">일부 부동 소수점 형식으로의 변환 시 클램핑을 비활성화하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="parameter-resolution.md">Parameter resolution</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">vImage가 부동 소수점 16비트 연산에서 더 빠르지만 정밀도가 낮은 내부 산술을 사용하도록 지정하는 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="resolvers.md">Resolvers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Resolve the parameters of your app intents, and extend the standard resolution types to include your app’s custom types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="app-entities.md">App entities</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Make core types or concepts discoverable to the system by declaring them as app entities.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="app-enums.md">Static parameter types</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Types that represent an enumerable list of static parameter values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="entity-queries.md">Entity queries</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Help the system find the entities your app defines and use them to resolve parameters.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="property-comparators.md">Property comparators</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Specify the type of comparison to perform during a property-matched query.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/appintents/common-data-types">View on Apple Developer</a>*</span>
